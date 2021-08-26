var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); // pacientes recebe todos os dados do #primeiro-pacientes

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso); //recebe true ou false
    var alturaValida = validaAltura(altura); //recebe true ou false

    // se o peso for válido ele entra nesse if
    if (!pesoValido) {
        pesoValido = false;
        console.log("Peso Inválido!");
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add('paciente-invalido'); // adiciona uma classe no css.
    }

    if (!alturaValida) {
        alturaValida = false;
        console.log("Altura Inválida!");
        tdAltura.textContent = "Altura inválida!";
        paciente.classList.add('paciente-invalido');
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}