ScrollReveal().reveal('.div-dad1',{
    duration: 1000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'left', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
ScrollReveal().reveal('.div-dad2',{
    duration: 1500, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'right', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
ScrollReveal().reveal('.div3',{
    duration: 2000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'right', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
ScrollReveal().reveal('.carousel',{
    duration: 3000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'bottom', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})


$(document).ready(function() {

    // Seleciona o conteiner . carousel e aplica a funçao slick()
    // que ativa o carrossel com as configurações abaixo
    $('.carousel').slick({

        //slidesToShow: numero de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 1, // exibe 3 cards ao mesmo tempo

        //slidesToScroll: define quantos cards serao deslizados ao mover o carrossel
        slidesToScroll: 1, // Move 1 car por vez ao deslizar

        // infinite: quando true, o carrossel retona ao inicio automaticamente
        Infinite: true, //mantem o carrossel em rotação continua

        //dots: quando true, ativa os pontos de navegação abaixo do carrossel
        dots: true, // adiciona pontos de navegação para os usuarios

        // arrows: exibe setas de navegação nas laterais do carrossel
        arrows: true, // ativa as setas para navegar entre os cards
    })
})