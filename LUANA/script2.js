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

    // Alterna a exibição entre a página de login e a de cadastro
    const linkLogin = document.querySelector('.login-link a');
    if (linkLogin) {
        linkLogin.addEventListener('click', mostrarCadastro);
    }

    // Se o usuário clicar no link "Cadastre-se aqui" no formulário de login
    const linkCadastro = document.querySelector('.login-link a');
    if (linkCadastro) {
        linkCadastro.addEventListener('click', mostrarLogin);
    }
});