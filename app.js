const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Form = require('./models/form.js');
const mongo = require('mongodb').MongoClient;
const app = express();


mongoose.connect('mongodb://localhost:27017/airplaneport', { useNewUrlParser: true,
useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
});
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');



// Index Route
app.get('/index.html', function(req, res){
    
});

app.post("/index.html", (req, res) => {
    const name = req.body.name;
    const email = req.body.email; 
    const messages = req.body.messages;
    console.log(messages, email, name);
    console.log(req.body);
    var userData = new Form(req.body);
    userData.save()
      .then(item =>{
        async function main() {
        
            let testAccount = await nodemailer.createTestAccount();
          
      
            let transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 587,
              secure: false,
              auth: {
                user: 'jalissaw32', 
                pass: 'Winchester32@' 
              },
              tls: {
                  rejectUnauthorized: false
              }
            });
          
            
            let info = await transporter.sendMail({
              from: email,
              cc: email, 
              to: "<jalissa_williams@yahoo.com>",
              subject: name, 
              text: messages, 
              html: messages, 
            });
          
            console.log("Message sent: %s", info.messageId);
            
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          }
          
          main().catch(console.error);
      })
      .catch(err =>{
        res.status(400).send("Unable to save to database");
      });
      setTimeout((function() {res.redirect('/index.html')}), 2000);
});








const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`http://localhost:${port}: server started`);
})