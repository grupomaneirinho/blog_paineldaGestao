document.getElementById("formulario").addEventListener("submit", enviarDados);


function enviarDados(e){
    e.preventDefault();
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.ipify.org?format=json");
    
    xhr.addEventListener("load", function(){
        var nome = coletaDados("nome");
        var email = coletaDados("email");
        var data = dataCompleta();
        var ip = JSON.parse(xhr.responseText).ip;
    
    
        salvaLeads(nome, email, data, ip);
        
    })
    xhr.send();
} 


function coletaDados(id){
    return document.getElementById(id).value;
}


