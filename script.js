
const burger = document.querySelector('.hamburger');

const list = document.querySelector('.navlist');


burger.addEventListener('click', ()=>){
    

    list.classList.toggle('navlist-active');
};