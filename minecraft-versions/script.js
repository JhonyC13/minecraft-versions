function carregar(){
    var agora = new Date()

    var horas1 = agora.getHours()
    var minutos1 = agora.getMinutes()

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
    
    
    if(horas2 < 10 && minutos2 < 10){

        horario.innerHTML = `0${horas1}:0${minutos1}`
    }
   else if(horas2 < 10 && minutos2 >= 10){

        horario.innerHTML = `0${horas1}:${minutos1}`
    }
    else if(horas2 > 10 && minutos2 < 10){

        horario.innerHTML = `${horas1}:0${minutos1}`
    }
    else{

        horario.innerHTML = `${horas1}:${minutos1}`
    }
}
