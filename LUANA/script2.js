document.addEventListener("DOMContentLoaded", function () {
    // Função para alternar entre a exibição do formulário de cadastro e login
    function mostrarCadastro() {
        document.getElementById('cadastro-form').style.display = 'block';
        document.getElementById('login').style.display = 'none';
    }

    function mostrarLogin() {
        document.getElementById('cadastro-form').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }

    // Se o usuário clicar no link "Cadastre-se aqui" no formulário de login
    const linkCadastro = document.querySelector('.login-link a');
    if (linkCadastro) {
        linkCadastro.addEventListener('click', mostrarLogin);
    }
});
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
