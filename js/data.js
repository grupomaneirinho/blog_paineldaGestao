function digito(n) {
		if(n<9) return "0"+n;
		return n;
	}

function dataCompleta(){
    var data = new Date;
    var formtData = data.getFullYear() + "-" + digito(parseInt(data.getMonth()+1)) + "-" + digito(data.getDate()) + " " + digito(data.getHours()) + ":" + digito(data.getMinutes()) + ":" + digito(data.getSeconds());
    return formtData;
}
