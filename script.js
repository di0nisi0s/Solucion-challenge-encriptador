


var textInp = document.getElementById('textInput');
var textOut = document.getElementById('textOutput');

var textOutputMuñeco = document.querySelector(".Muñeco");
var textOutputVoid = document.querySelector(".text-output-void");

var textOutputFull = document.querySelector(".text-output-full");
textOutputFull.style.display = 'none';
var campo_btncopy = document.querySelector(".btn-copiar");
campo_btncopy.style.display = 'none';


const bonton1 = document.getElementById("btn-copiar");
const check = /[A-Z\áéíóú\ÁÉÍÓÚ]/;


bonton1.addEventListener("click", Copiar)


function validar() {
    if (check.test(textInp.value)) {
        textInp.value = ""
        textAreaVoid();
        return alert("El texto contiene caracteres no validos \ningrese el texto nuevamente");
    } else if (textInp.value == "") {
        textAreaVoid();
    } else {
        textAreaFull();
    }

}

function textAreaFull() {
    textOutputMuñeco.style.display = 'none';
    textOutputVoid.style.display = 'none';
    textOutputFull.style.display = 'block';
    campo_btncopy.style.display = 'block';

}

function textAreaVoid() {
    textOutputMuñeco.style.display = 'block';
    textOutputVoid.style.display = 'block';
    textOutputFull.style.display = 'none';
    campo_btncopy.style.display = 'none';

}

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(txtEnc) {
    validar();
    let matriz = [["e", "enter"], ["i","imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    txtEnc = txtEnc.toLowerCase();

    for(let i =0; i < matriz.length;i++){
        if(txtEnc.includes(matriz[i][0])){
            txtEnc = txtEnc.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return txtEnc;
}

function btnEnc(){
    const txtEn = encriptar(textInp.value);
    textOut.value = txtEn;
    textInp.value = "";
    textOut.style.backgroundImage = "none";
}

function decencriptar(txtDes) {
    validar();
    let matriz = [["e", "enter"], ["i","imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    txtDes = txtDes.toLowerCase();

    for(let i =0; i < matriz.length;i++){
        if(txtDes.includes(matriz[i][0])){
            txtDes = txtDes.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    return txtDes;
}

function btnDes(){
    const txtDe = decencriptar(textInp.value);
    textOut.value = txtDe;
    textInp.value = "";
    textOut.style.backgroundImage = "none";
}

function Copiar() {
    let copyText = document.querySelector(".text-output-result").value;
    navigator.clipboard.writeText(copyText);
    window.alert("El mensaje fue copiado");
}