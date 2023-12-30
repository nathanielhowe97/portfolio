let wrapper = document.querySelector('.body')
const navLinks = document.querySelector('.nav-links')
let visible = document.querySelector('.nav-links--visible')
let menu = document.querySelector('.hamburger')

menu.addEventListener('click', function(){
    navLinks.classList.toggle("nav-links--visible")
    wrapper.classList.toggle("no-overflow")

})