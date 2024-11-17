document.addEventListener("DOMContentLoaded", function () {
    const deficienciaSelect = document.getElementById('deficiencia');
    const descricaoDeficiencia = document.getElementById('descricao-deficiencia');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmar-senha');
    const form = document.getElementById('cadastro-form');
    
    deficienciaSelect.addEventListener('change', function () {
        if (deficienciaSelect.value === 'sim') {
            descricaoDeficiencia.style.display = 'block';
        } else {
            descricaoDeficiencia.style.display = 'none';
        }
    });

    form.addEventListener('submit', function (event) {
        if (senhaInput.value !== confirmarSenhaInput.value) {
            alert('As senhas não coincidem. Por favor, tente novamente.');
            event.preventDefault();
        }
    });

    senhaInput.addEventListener('input', function () {
        if (senhaInput.value !== confirmarSenhaInput.value) {
            confirmarSenhaInput.setCustomValidity('As senhas não coincidem');
        } else {
            confirmarSenhaInput.setCustomValidity('');
        }
    });

    confirmarSenhaInput.addEventListener('input', function () {
        if (senhaInput.value !== confirmarSenhaInput.value) {
            confirmarSenhaInput.setCustomValidity('As senhas não coincidem');
        } else {
            confirmarSenhaInput.setCustomValidity('');
        }
    });
});


// Função para validar o formulário antes do envio
function validarFormulario() {
    const termos = document.getElementById("termos");
    
    // Verifica se o checkbox foi marcado
    if (!termos.checked) {
        alert("Você precisa concordar com os termos de uso antes de continuar.");
        return false;  // Impede o envio do formulário
    }

    // Caso contrário, o formulário pode ser enviado
    return true;
}

// Adiciona o evento de validação ao formulário
document.getElementById("cadastro-form").onsubmit = validarFormulario;
