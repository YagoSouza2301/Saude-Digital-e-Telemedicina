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
