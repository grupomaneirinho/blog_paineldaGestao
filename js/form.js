document.getElementById("formulario").addEventListener("submit", enviarDados);
document.getElementById("formulario-planilha").addEventListener("submit", enviarDadosExcel);

function delayModal() {
    setTimeout(() => {
        $('#myModal').modal('toggle');
    }, 1000);
}

function enviarDadosExcel(e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.ipify.org?format=json");

    xhr.addEventListener("load", function() {

        var nome = validaNome("nome");
        var email = coletaDados("email");
        var data = dataCompleta();
        var ip = JSON.parse(xhr.responseText).ip;

        salvaLeads(nome, email, data, ip);
        resetForm();

        $('#myModal').modal({ backdrop: 'static', keyboard: false })

    })
    xhr.send();


}

function enviarDados(e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.ipify.org?format=json");

    xhr.addEventListener("load", function() {
        var nome = validaNome("nome");
        var email = coletaDados("email");
        var data = dataCompleta();
        var ip = JSON.parse(xhr.responseText).ip;

        salvaLeads(nome, email, data, ip);
        alert("Cadastro realizado com sucesso!");
        window.location.replace("https://paineldagestao.com.br/docs/ebook.pdf");
        resetForm();
    })
    xhr.send();
}

function coletaDados(id) {
    return document.getElementById(id).value;
}

function resetForm() {
    var form = document.querySelector("#formulario");
    return form.reset();
}