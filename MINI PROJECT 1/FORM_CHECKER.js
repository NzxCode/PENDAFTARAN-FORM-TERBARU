const btnDaftar = document.getElementById('btn-register');
const btnReset = document.getElementById('btn-clear');
const statusArea = document.getElementById('status-area');

btnDaftar.addEventListener('click', function() {
    statusArea.innerText = "";

    const errorTexts = document.getElementsByClassName('error-msg');
    const allInputs = document.getElementsByTagName('input');

    for (let i = 0; i < errorTexts.length; i++) {
        errorTexts[i].style.display = 'none';
        allInputs[i].classList.remove('input-error');
    }

    let isDataAman = true;

    if (allInputs[0].value === "") {
        errorTexts[0].style.display = 'block'; 
        allInputs[0].classList.add('input-error');
        isDataAman = false;
    }

    const passInput = document.getElementById('password-input');
    
    if (passInput.value.length < 8) {
        errorTexts[1].style.display = 'block';
        passInput.classList.add('input-error');
        isDataAman = false;
    }

    if (isDataAman) {
        statusArea.style.color = "#27ae60"; 
        statusArea.innerText = "Data Valid! Mengirim ke Server...";
    } else {
        statusArea.style.color = "#e74c3c"; 
        statusArea.innerText = "Perbaiki data di atas!";
    }
})

btnReset.addEventListener('click', function() {
    const semuaInput = document.getElementsByTagName('input');
    const semuaError = document.getElementsByClassName('error-msg');

    for (let i = 0; i < semuaInput.length; i++) {
        semuaInput[i].value = ""; 
        semuaInput[i].classList.remove('input-error');
    }

    for (let j = 0; j < semuaError.length; j++) {
        semuaError[j].style.display = 'none';
    }

    statusArea.style.color = "#34495e";
    statusArea.innerText = "Form telah dibersihkan.";
});