const plano = new Typed('#plano', {
    strings: ["Planos de Saúde Digitais?"],
    typeSpeed: 100, 
    backSpeed: 100, 
    showCursor: false,  
    fadeOut: true,
});


ScrollReveal().reveal('#caixas', {
    duration: 2000, // Duração do efeito (em milissegundos), define a velocidade da transição  
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