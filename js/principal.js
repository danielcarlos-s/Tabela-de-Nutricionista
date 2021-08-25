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

var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function (evento) {
    event.preventDefault(); // evita que o botão atualize a página

    var form = document.querySelector(".form-adiciona"); //buscando o form

    // variável recebendo os valores preenchidos no formulário
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // criando um elemento "tr" na variável
    var pacienteTr = document.createElement("tr");

    // criando um elemento "td" na variável
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // atribuindo o conteúdo de texto preenchido, as respectivas td's
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // colocando como filhos o td ao pacienteTr (tag tr)
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // buscando a tabela e definindo o pacienteTr como filho dela
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

})