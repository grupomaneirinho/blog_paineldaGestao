
function validaNome(nome){    
    if(!isTipo(nome)){
        return alert("Por favor preencher nome e sobrenome!");
}else{
    return coletaDados("nome");
    }
}
       
function isTipo(nome){
        var nome = coletaDados(nome);
		var reTipo = /[A-z][ ][A-z]/;
		return reTipo.test(nome);
	}

/*function validaEmail(email){
		var email = coletaDados(email);
		if (email.lenght > 0)
			return coletaDados("email");
		else
			return ("Por favor preencher e-mail!");
}*/