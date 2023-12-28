const passBox = document.querySelector("#password");
const btnCrearPassword = document.querySelector(".btnPass");
const copyPass = document.querySelector("img");
const contenedorPrincipal = document.querySelector(".container");
const mensajes = document.querySelector("#mensaje");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-=_+[]{}";

//Un string con todos las variables anteriores
const allChars = upperCase + lowerCase + numbers + symbols;

//addEventListeners
btnCrearPassword.onclick = createPassword;
copyPass.onclick = copyPassword;

//Funciones
function createPassword() {
    let password = "";
    //Toma un caracter de cualquiera de los strings aleatoriamente
    //Ya que multiplicamos 
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length >= password.length){ //Mientras que password.length no tenda 12, seguimos añadiendo caracteres
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passBox.value = password; //
}

function copyPassword() {
    let password = passBox.value;

    navigator.clipboard.writeText(password);

    limpiarHTML(mensajes);
        const exitoDiv = document.createElement("DIV");
        exitoDiv.classList.add("exito");
        exitoDiv.textContent = "Copied to clipboard!"
        mensajes.appendChild(exitoDiv);
        setTimeout(() => {
            exitoDiv.remove();
        }, 1000);
}

function limpiarHTML(elementoPadre) {
    // Verificar si el elemento padre tiene hijos
    while (elementoPadre.firstChild) {
        // Eliminar el primer hijo del elemento padre
        elementoPadre.removeChild(elementoPadre.firstChild);
    }
}


