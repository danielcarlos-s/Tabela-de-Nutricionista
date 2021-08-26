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
    imcTd.textContent = calculaImc(peso,altura); //usando a função do arquivo calcula-imc.js

    // colocando como filhos o td ao pacienteTr (tag tr)
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // buscando a tabela e definindo o pacienteTr como filho dela
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

})