// -------------------------------------------ANIMAÇÃO DO ROBO - (SESSÃO1)-----------------------------------------------
// Animação de entrada do robô
ScrollReveal().reveal('.robo', {
    duration: 1000,
    origin: 'right',
    distance: '50px',
});

ScrollReveal().reveal('#direita', {
    duration: 2000,
    origin: 'left',
    distance: '100px',
});
ScrollReveal().reveal('#esquerda', {
    duration: 2500,
    origin: 'rigth',
    distance: '100px',
});
    // -------------------------------------------BOTÃO PARA APARECER - (SESSÃO2)-----------------------------------------------
    // Todas as Div que estão oculta, ao clicar no botão vão aparecer

    // Função do botão de VER MAIS
    function aparecer(){
        // Se a Div estiver oculta(display='none')
        if ( document.getElementById('oculta').style.display='none') {
            // Faça ela aparecer normalmente
            document.getElementById('oculta').style.display='block'

        // Se o Botão estiver aparecendo (display='block')
        document.getElementById('oculta-botao').style.display='block'
            // Faça ele ser ocultado
            document.getElementById('oculta-botao').style.display='none'
        };
    };

    // -------------------------------------------BOTÃO PARA OCULTAR - (SESSÃO2)-----------------------------------------------
    // Todas as Div que estão aparecendo, ao clicar no botão vão de ocultar novamente
    // Função do botão VOLTAR
    function voltar(){
        // Se a Div estiver aparecendo
        if ( document.getElementById('oculta').style.display='block') {
            // Faça que ele se oculta
            document.getElementById('oculta').style.display='none'
        
            if(
        // Se o botão estiver oculto
        document.getElementById('aparecer-botao').style.display='none')
            // Faça que ele apareça 
            document.getElementById('aparecer-botao').style.display='block'
            // e quando a Div aparecer faça que o botão VER MAIS apareça 
            document.getElementById('oculta-botao').style.display='block'
        
        };
    };

    const typed = new Typed ('#plano-saude', {
        strings: ['Venha conhecer nossos Planos'],
        typeSpeed: 100, //Velocidade que será digitado nosso text
        backSpeed: 80, //Velocidade de retorno de texto
        loop: true, // Faz com que o texto fique em execução infinita
        showCursor: false, // Estamos removendo o cursos padrão do HTML
        
    });

    ScrollReveal().reveal('.div-plano', {
        duration: 3000,
        origin: 'bottom',
        distance: '100px',
    });
