const burgerButton = document.getElementsByClassName('content-header__burger-button')[0];
const modal = document.getElementsByClassName('modal')[0];

let isToggled = false;

const handleClick = () => {
    isToggled = !isToggled;

    if (isToggled) {
        modal.classList.add('modal--visible');
    } else {
        modal.classList.remove('modal--visible')
    }
}

document.addEventListener("DOMContentLoaded", function(){
    burgerButton.addEventListener('click', handleClick);
});