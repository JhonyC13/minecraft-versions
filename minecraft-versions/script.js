//função chamada quando a página é carregada
function carregar(){
    mostrarHorario()
    iniciarAtualizacao()
}

//mostra o horário e uma mensagem que muda dependendo do horário.
function mostrarHorario(){
    var data = new Date();

    var horas1 = data.getHours();
    var minutos1 = data.getMinutes();

    var horas2 = horas1;
    var minutos2 = minutos1;

    var msg = document.getElementById('msg');
    var horario = document.getElementById('horas');

    if(horas1 <= 12){

        msg.innerHTML = 'Bom dia!'
    }
    else if(horas1 > 12 && horas1 < 18){

        msg.innerHTML = 'Boa Tarde!'
    }
    else{

        msg.innerHTML = 'Boa Noite!'
    }
    
    horas.innerHTML = data.toLocaleTimeString();
}

//função que atualiza a função mostrarHorario a cada 1 segundo
function iniciarAtualizacao(){
    setInterval(mostrarHorario, 1000)
}
