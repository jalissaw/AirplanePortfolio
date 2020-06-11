const mongoose = require('mongoose');

//models 
const formSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    messages: String 
});

const Form = mongoose.model('Form', formSchema)

module.exports = Form;