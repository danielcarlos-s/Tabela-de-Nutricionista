var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault(); // evita que o botão atualize a página

    var form = document.querySelector(".form-adiciona"); //buscando o formulário
    var paciente = obtemPacienteDoFormulario(form); // Extraindo informações do paciente do formulário
    var pacienteTr = montaTr(paciente); // Montando a tr com os dados do paciente

    var tabela = document.querySelector('#tabela-pacientes'); // buscando a tabela e definindo o pacienteTr como filho dela
    tabela.appendChild(pacienteTr);

    form.reset(); // reseta o formulário após enviar os dados

})

// função que obtém os dados do paciente inseridos no formulário
function obtemPacienteDoFormulario(form) {

    // a variável paciente é um objeto com várias informações
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

// função que monta a tr
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // colocando como filhos o td ao pacienteTr (tag tr), com a função de criação de td
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

// função que mota as td's
function montaTd(dado, classe) {
    var td = document.createElement("td"); // cria a td
    td.textContent = dado; // adiciona os dados recebidos e insere na td
    td.classList.add(classe); // adiciona a classe recebida na td

    return td;
}