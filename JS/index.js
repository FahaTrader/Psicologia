const button = document.getElementById('buttonLogin');

// Enviando Formulário
const addloading = () => {
    button.innerHTML = '<img class="img-button" src="/Static/png-clipart-computer-icons-loading-chart-hand-circle.png">';
}

const removeloading = () => {
    button.innerHTML = 'Enviar';
}

// Salvando o formulário no excel
const handleSubmit = (event) => {
    event.preventDefault();
    addloading();
    

    const NOME = document.querySelector('input[name=name]').value;
    const WHATSAPP = document.querySelector('input[name=tel]').value;
    const NASCIMENTO = document.querySelector('input[name=date]').value;

    fetch('https://api.sheetmonkey.io/form/3m1vGSyKv9idvhSJwAdzVp', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ NOME, WHATSAPP, NASCIMENTO}),
    }).then(() => removeloading());

    $('#buttonQuest').removeClass('hidden')
    
}

document.querySelector('form').addEventListener('submit', handleSubmit);