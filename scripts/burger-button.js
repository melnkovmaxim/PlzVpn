const burgerButton = document.getElementsByClassName('header__burger-button')[0];
const modal = document.getElementsByClassName('modal')[0];
const nav = document.getElementsByClassName('header__nav')[0];
const burgerButtonInner = document.getElementsByClassName('burger-button__inner')[0];

let isToggled = false;

const handleClick = () => {
    isToggled = !isToggled;

    if (isToggled) {
        document.body.style.overflow = 'hidden';
        modal.classList.add('modal--visible');
        nav.classList.add('header__nav--visible');
        burgerButtonInner.classList.add('burger-button__inner--toggled');
    } else {
        document.body.style.overflow = 'show';
        modal.classList.remove('modal--visible');
        nav.classList.remove('header__nav--visible');
        burgerButtonInner.classList.remove('burger-button__inner--toggled');
    }
}

document.addEventListener("DOMContentLoaded", function(){
    burgerButton.addEventListener('click', handleClick);
});