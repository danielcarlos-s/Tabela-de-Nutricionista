/* var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; */

var pacientes = document.querySelectorAll(".paciente"); // pacientes recebe todos os dados do #primeiro-pacientes

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        console.log("Peso Inválido!");
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add('paciente-invalido'); // adiciona uma classe no css.
    }
    
    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        console.log("Altura Inválida!");
        tdAltura.textContent = "Altura inválida!";
        paciente.classList.add('paciente-invalido');
    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}