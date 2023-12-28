const navLinks = document.querySelector('.nav-links')
let visible = document.querySelector('.nav-links--visible')
let menu = document.querySelector('.hamburger')

menu.addEventListener('click', function(){
    navLinks.classList.toggle("nav-links--visible")

    if(!visible){
        navLinks.style.animation = "fade .1s linear"
    }

    if (visible){
        navLinks.style.animation = "fadeOut .1s linear"
    }
})