// VERSÃO MOBILE
//Aqui  adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburger.
hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("flex");
    // Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo mossa caixa (DIV) aparecer, ou seja, ficar visivel
});

//Criamos uma função que a o ouvir o click do mouse, ele REMOVA uma Class, que está fazendo mossa caixa (Div) desaparecer, ou seja, ficar invisivel.
closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("flex");
});


ScrollReveal().reveal('#bottom', {
    duration: 1500,
    origin: 'bottom',
    distance: '200px',
});



ScrollReveal().reveal('#box1', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
});
ScrollReveal().reveal('#box2', {
    duration: 1500,
    origin: 'top',
    distance: '100px',
});
ScrollReveal().reveal('#box3', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
});

const plano = new Typed('#text', {
    strings: ["Faça agora sua consulta"],
    typeSpeed: 100, 
    backSpeed: 100, 
    showCursor: false,  
    fadeOut: true,
    loop: true,
});







$(document).ready(function() {

    // Seleciona o contêiner .carousel e aplica a função slick()
    // que ativa o carrossel com as configurações abaixo
    $('.s5-div').slick({

        // slidesToSho: número de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 1, // Exibe 1 cards ao mesmo tempo

        // slidesToScroll: define quantos cards serão deslizados ao mover o carrossel
        slidesToScroll: 1, // Move 1 card por vez ao deslizar

        //inflinite: quando true, o carrossel retorna ao inicio automaticamente
        infinite:true, // Mantém o carrossel em rotação continua

        // dots: quando true, ativa os pontos de navegação abaixo do carrossel
        dots: true, // Adiciona pontos de navegação para os usuários

        // arrows: exibe setas de navegação nas laterais do carrossel
        arrows: true, // Ativa as setas para navegar entre os cards
    });
});











