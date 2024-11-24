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
ScrollReveal().reveal('.carousel-container',{
    duration: 3000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'bottom', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
ScrollReveal().reveal('.section3',{
    duration: 2000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'bottom', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})




// seleciona o elemento que contem todas as imagens do carrossel
const track = document.getElementById('carouselTrack');

//obtem o numero de imagens no carrossel
const items = document.querySelectorAll('.carousel-item');
let index = 0; // indice que rastreia a imagem atual

//função que move o carrossel para a proxima imagem
function moveCarousel() {
    //incrementa o indice para avançar uma imagem
    index++;

    // verifica se o indice chegou a ultima imagem clonada 
    if (index >= items.length - 1) {
        // pequeno atraso para permitir que a transição termine
        setTimeout(() => {
            track.style.transition = 'none';// Remove a animação
            index = 0; //volta ao inicio (primeira imagem)
            track.style.transform = `translateX(0)`; // Move para a primeira imagem

        }, 500);//tempo suficiente para completar a transição visivel
        
    } else {
        //move o carrossel para a proxima imagem
        track.style.transition = 'transform 0.5s ease' // adiciona a animação
        track.style.transform = `translateX(-${index * 100}%)`; //desloca o carrossel
    }
};

//define um intervalo para mover o carrossel automaticamente a cada 3 segundos
setInterval(moveCarousel, 10000);

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


