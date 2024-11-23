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

const plano = new Typed('#plano', {
    strings: ["Planos de Saúde Digitais e Telemedicinas?"],
    typeSpeed: 100, 
    backSpeed: 100, 
    showCursor: false,  
    fadeOut: true,
});


ScrollReveal().reveal('#caixas', {
    duration: 3000, // Duração do efeito (em milissegundos), define a velocidade da transição  
    origin: 'bottom', // Origem do efeito, o conteúdo virá de baixo para cima
    distance: '100px', // Distância que o elemento "viaja antes de aparecer"
});

$(document).ready(function() {

    $('.carrossel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true, 
        dots: true, 
        arrows: true 
    });
});