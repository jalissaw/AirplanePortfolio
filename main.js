const toggler = document.querySelector('.toggler'); 
const dropMenu = document.querySelector('.showmenu');
const showLinks = document.querySelectorAll('.showlink');
const showLink = document.querySelector('.showlink a');
const cards = document.querySelectorAll('.card')
const maintain = document.querySelectorAll('.maintain')



toggler.addEventListener('click',  () => {
    clicked = true;
    console.log('clicked');
    dropMenu.classList.toggle('open');
   
    if (showLink === clicked) {
        dropMenu.classList.remove('open');
    } 

    //Let li items come in one at a time
    i = 0;
    function showList () {
        if(i < showLinks.length) {
            showLinks[i].classList.add('open');
            i++
            setTimeout(showList, 500)
        } 
        else i = 0;
    }
    showList();
});

// Project card fade in when scrolled 
function scrolled () {
    console.log(cards)
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