run('08:00','20:00','18:00','[1,2,3,4,5]');

function run(initialHour, endHour, saturdayEndHour, workDays) {

    let data = new Date();
    let horaAtual = parseInt(data.getHours());
    let minAtual = parseInt(data.getMinutes());
    //let segAtual = data.getSeconds();// <- se quiser adicionar segundos
    let str_hora = horaAtual + ':' + minAtual;// + ':' + segAtual; // <- se quiser adicionar segundos

    let inicialHora = initialHour.split(':');
    let horaInicio = parseInt(inicialHora[0]);
    let minutoInicio = parseInt(inicialHora[1]);
    //alert('Hora de início: '+ horaInicio +'. Minutos: ' + minutoInicio);
    let finalHora = endHour.split(':');
    let horaFinal = parseInt(finalHora[0]);
    let minutoFinal = parseInt(finalHora[1]);
    //alert('Hora de fim: '+ horaFinal +'. Minutos: ' + minutoFinal);
    let finalHoraSab = saturdayEndHour.split(':');
    let horaFinalsab = parseInt(finalHoraSab[0]);
    let minutoFinalsab = parseInt(finalHoraSab[1]);
    //alert('Hora de fim aos sábados: '+ finalHoraSab[0] +'. Minutos: ' + finalHoraSab[1]);


    if (parseInt(data.getDay()) == 3) {
        console.log('Hoje nosso horario de funcionamento e das ' + initialHour + ' as ' + saturdayEndHour);
        if ((horaAtual > horaInicio && horaAtual < horaFinalsab) || (horaAtual == finalHoraSab && minAtual <= minutoFinalsab) || (horaAtual == horaInicio && minAtual >= minutoInicio)) {
            var varStatus = true;
            var varHora = str_hora;
        } else {
            var varStatus = false;
            var varHora = str_hora;
        }
    } else {
        for (let i = 0; i < workDays.length; i++) {
            if (parseInt(workDays[i]) == parseInt(data.getDay())) { // se é um dos dias de trabalho normal
                if ((horaAtual > horaInicio && horaAtual < horaFinal) || (horaAtual == horaFinal && minAtual <= minutoFinal) || (horaAtual == horaInicio && minAtual >= minutoInicio)) {
                    var varStatus = true;
                    var varHora = str_hora;
                } else {
                    var varStatus = false;
                    var varHora = str_hora;
                }
                break;
                //               }else{
                //                   alert('i = ' + i + '\nDia de hoje: ' + data.getDay());
            }
        }
    }

    if (varStatus) {
        console.log('Estamos em funcionamento');
    //    alert('Estamos em funcionamento')
    } else {

        console.log('No momento nao estamos em funcionamento, nosso horario de funcionamento de segunda a sexta e de ' + initialHour + ' as ' + endHour + '. \n' + 'Nos sabados encerramos os atendimentos as ' + saturdayEndHour);
    //    alert('No momento nao estamos em funcionamento, nosso horario de funcionamento de segunda a sexta e de ' + initialHour + ' as ' + endHour + '. \n' + 'Nos sabados encerramos os atendimentos as ' + saturdayEndHour)
    }

    return objeto = {
        status: varStatus,
        hora: varHora
    }
}


