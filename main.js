const toggler = document.querySelector('.toggler'); 
const dropMenu = document.querySelector('.showmenu');
const showLinks = document.querySelectorAll('.showlink');
const showLink = document.querySelectorAll('.showlink a');
const cards = document.querySelectorAll('.card')
const maintain = document.querySelectorAll('.maintain')
const form = document.querySelector('.form')


//Toggler Menu Button
toggler.addEventListener('click',  () => {
    clicked = true;
    console.log('clicked');
    dropMenu.classList.toggle('open');
   

    //Let li items come in one at a time
    i = 0;
    function showList () {
        if(i < showLinks.length) {
            showLinks[i].classList.add('open');
            i++
            setTimeout(showList, 250)
        } 
        else i = 0;
    }
    showList();
});

//Close Menu on the click of a link
function closeMenu () {
    for (let i = 0; i < showLink.length; i++) {
        showLink[i].addEventListener('click', function(){
            console.log(showLink);
            dropMenu.classList.remove('open');
        })
    }
}

closeMenu()


// Project card fade in when scrolled 
function scrolled () {
    for (var i = 0; i < cards.length; i++) {
    const position = cards[i].getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
                   cards[i].classList.add('appear');
                }
    }
}

window.addEventListener('scroll', scrolled);

// What I do section  fade in when scrolled 
function scrolledMaintain () {
    for (var i = 0; i < maintain.length; i++) {
    const position = maintain[i].getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
                   maintain[i].classList.add('appear');
                }
    }
}

window.addEventListener('scroll', scrolledMaintain);

function formAppear () {
    const position = form.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
                   form.classList.add('appear');
                }
}

window.addEventListener('scroll', formAppear);


// Ajax
const submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => {

        const alertMessage = document.querySelector('.alert');
        const email = document.querySelector('#email').value;
        const name = document.querySelector('.name').value;
        if (name === '' || email === '') {
                    alertMessage.innerHTML = 'Name And Email Required';
                    e.preventDefault();
        } else {
                    alertMessage.innerHTML = 'Success! Someone will be in touch with you soon!'
        }

        const http = new XMLHttpRequest();

            http.onload = () => {
            console.log("email sent!");
            };

            http.open('POST', '/index.html', true);
            http.send();

});
