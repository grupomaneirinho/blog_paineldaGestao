var config = {
    apiKey: "AIzaSyDTs-F66ssbxSwMETJ6U1-PjIqNGqZ2CGY",
    authDomain: "blog-painel-da-gestao-form.firebaseapp.com",
    databaseURL: "https://blog-painel-da-gestao-form.firebaseio.com",
    projectId: "blog-painel-da-gestao-form",
    storageBucket: "blog-painel-da-gestao-form.appspot.com",
    messagingSenderId: "740249402520"
  };
firebase.initializeApp(config);

//Referenciando coleção.
    
var leads = firebase.database().ref("Leads");

//Salva leads no firebase

function salvaLeads(nome, email, data, ip){
    var newLeads = leads.push();
    newLeads.set({
        nome: nome,
        email: email,
        data: data,
        ip: ip
    });
}