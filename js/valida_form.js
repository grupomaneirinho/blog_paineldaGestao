
function validaNome(nome){    
    if(!isTipo(nome)){
        return alert("Por favor preencher nome completo!");
}else{
    return coletaDados("nome");
    }
}
       
function isTipo(nome){
        var nome = coletaDados(nome);
		var reTipo = /[A-z][ ][A-z]/;
		return reTipo.test(nome);
	}
