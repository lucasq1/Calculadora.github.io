"use strict"

    const forma = document.getElementById('forma');
    let operandoa = forma["operandoa"];
    let operandob = forma["operandob"];
    let resultado;
function sumar(){
    resultado = parseInt(operandoa.value) + parseInt(operandob.value);
    if(isNaN(resultado)){
        resultado = "La operación no incluye números"
    }
    document.getElementById("resultado").innerHTML = `Resultado de la suma: ${resultado}`
}

function restar(){
    resultado = parseInt(operandoa.value) - parseInt(operandob.value);
    if(isNaN(resultado)){
        resultado = "La operación no incluye números"
    }
    document.getElementById("resultado").innerHTML = `Resultado de la suma: ${resultado}`
}

function multiplicar(){
    resultado = parseInt(operandoa.value) * parseInt(operandob.value);
    if(isNaN(resultado)){
        resultado = "La operación no incluye números"
    }
    document.getElementById("resultado").innerHTML = `Resultado de la suma: ${resultado}`
}

function dividir(){
    resultado = parseInt(operandoa.value) / parseInt(operandob.value);
    if(isNaN(resultado)){
        resultado = "La operación no incluye números"
    }
    document.getElementById("resultado").innerHTML = `Resultado de la suma: ${resultado}`
}

