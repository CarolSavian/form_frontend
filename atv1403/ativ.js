
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar o envio do formulário

    
const campoA = parseFloat(document.getElementById('campoA').value);
const campoB = parseFloat(document.getElementById('campoB').value);
const successMessage = document.getElementById('successMessage');

    if (campoB >= campoA) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        //containerMensagemSucesso, this.innerHTML = successMessage;
        successMessage.style.display = 'block';

    } else {
        document.querySelector('.error-message').style.display = 'block';
    }

})

