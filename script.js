
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
     searchform.classList.remove('active');
    cart_item.classList.remove('active');
}


let searchform= document.querySelector('.searchform');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cart_item.classList.remove('active');
}


let cart_item = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cart_item.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
   
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cart_item.classList.remove('active');
}