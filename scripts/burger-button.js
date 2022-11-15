const burgerButton = document.getElementsByClassName('content-header__burger-button')[0];
const modal = document.getElementsByClassName('modal')[0];
const nav = document.getElementsByClassName('content-header__nav')[0];
const burgerButtonInner = document.getElementsByClassName('burger-button__inner')[0];

let isToggled = false;

const handleClick = () => {
    isToggled = !isToggled;

    if (isToggled) {
        modal.classList.add('modal--visible');
        nav.classList.add('content-header__nav--visible');
        burgerButtonInner.classList.add('burger-button__inner--toggled');
    } else {
        modal.classList.remove('modal--visible');
        nav.classList.remove('content-header__nav--visible');
        burgerButtonInner.classList.remove('burger-button__inner--toggled');
    }
}

document.addEventListener("DOMContentLoaded", function(){
    burgerButton.addEventListener('click', handleClick);
});