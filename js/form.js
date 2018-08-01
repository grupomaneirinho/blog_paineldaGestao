document.getElementById("formulario").addEventListener("submit", enviarDados);


function enviarDados(e){
    e.preventDefault();
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.ipify.org?format=json");
    
    xhr.addEventListener("load", function(){
        var nome = validaNome("nome");
        var email = coletaDados("email");
        var data = dataCompleta();
        var ip = JSON.parse(xhr.responseText).ip;
    
        salvaLeads(nome, email, data, ip);
        alert("Cadastro realizado com sucesso!");
        resetForm();
    })
    xhr.send();
} 

function coletaDados(id){
    return document.getElementById(id).value;
}

function resetForm(){
    var form = document.querySelector("#formulario");
    return form.reset();
}

