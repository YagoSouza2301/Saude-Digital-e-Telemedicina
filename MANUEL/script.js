$(document).ready(function() {

    // Seleciona o contêiner .carousel e aplica a função slick()
    // que ativa o carrossel com as configurações abaixo
    $('#div-container-ouvidoria').slick({

        // slidesToSho: número de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 1, // Exibe 3 cards ao mesmo tempo

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