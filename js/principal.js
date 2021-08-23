/* var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; */

var paciente = document.querySelector("#primeiro-paciente"); // paciente recebe todos os dados do #primeiro-paciente

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso Inválido!");
    pesoValido = false;
    tdPeso.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3.00){
    alturaValida = false;
    console.log("Altura Inválida!");
    tdAltura.textContent = "Altura inválida!";
}

if(pesoValido && alturaValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
