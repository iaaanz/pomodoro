//Temporizador Pomodoro

//Variaveis
var min = 25;
var sec = 0;
var milis = 0;
var minbreak = 5;
var secbreak = 0;
var cont = 0;
var styleIniciar = document.getElementById('iniciar').style;
var styleParar = document.getElementById('parar').style;

function cronometro() {
    if (sec == 0 && min == 0) {
        clearInterval(cont);
    }
    else if (sec == 0) {
        sec = 60;
        min--;
    }
    if (milis == 0) {
        milis = 100;
        sec--;
    }
    else {
        milis--;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function alterHover(id, colorIn, colorOut) { //Funcao pra alterar o hover
    $(id).hover(function () {
        $(this).css("background-color", colorIn);
    }, function () {
        $(this).css("background-color", colorOut);
    });
}

function formatTimer(id, value) {
    if (value < 10) {
        $(id).html('0' + value);
    }
    else {
        $(id).html(value);
    }
}

function iniciar() { //Inicia os timers
    let statusCron = $('#iniciar').text();
    if (statusCron == 'Iniciar') {
        clearInterval(cont);
        cont = setInterval(() => { timersession() }, 10);
        $('#iniciar').html('Parar');
        $('#parar').html('Reinicar');
        styleIniciar.padding = '0px 20px 0px 20px';
        styleParar.display = 'inline';
        alterHover('#iniciar', "#CD0000", "");
        alterHover('#parar', "#FFCC00", "");;
    }
    else {
        clearInterval(cont);
        $('#iniciar').html('Iniciar');
        styleIniciar.padding = '0px 120px 0px 120px';
        styleParar.display = 'none';
        alterHover('#iniciar', "#3e8e41", "");
    }
}

async function reiniciar() {
    min = 25;
    sec = 0;
    milis = 0;
    formatTimer('#session-timer-min', min);
    formatTimer('#time-session-min', min);
    formatTimer('#session-timer-sec', sec);
    formatTimer('#time-session-sec', sec); 
    //Funcao sleep() porque ta reiniciando 1sec a menos, ARRUMAR!//
    clearInterval(cont);
    await sleep(1000);
    clearInterval(cont);
    cont = setInterval(() => { timersession() }, 10);
    $('#iniciar').html('Parar');
    $('#parar').html('Reiniciar');
    styleIniciar.padding = '0px 20px 0px 20px';
    styleParar.display = 'inline';

}

function timersession() { //Inicia o timer da session
    cronometro();
    formatTimer('#session-timer-min', min);
    formatTimer('#session-timer-sec', sec);
}

function timerbreak() { //Inicia o timer do break
    $('#session-timer-min').html(minbreak);
    $('#session-timer-sec').html(secbreak);
}

function session_min_up() { //Aumenta os minutos
    if (min == 59) {
        min = 0;
    }
    if (min < 59 && min >= 0) {
        min++;
        formatTimer('#session-timer-min', min);
        formatTimer('#time-session-min', min);
    }
}

function session_min_down() { //Diminui os minutos
    if (min == 0) {
        min = 59;
    }
    if (min <= 59 && min > 0) {
        min--;
        formatTimer('#session-timer-min', min);
        formatTimer('#time-session-min', min);
    }
}

function session_sec_up() { //Aumenta os segundos
    if (sec == 55) {
        sec = 0;
    }
    if (sec < 55 && sec >= 0) {
        sec = sec + 5;
        formatTimer('#session-timer-sec', sec);
        formatTimer('#time-session-sec', sec);
    }
}

function session_sec_down() { //Diminui os segundos
    if (sec == 0) {
        sec = 55;
    }
    if (sec <= 55 && sec > 0) {
        sec = sec - 5;
        formatTimer('#session-timer-sec', sec);
        formatTimer('#time-session-sec', sec);
    }
}
function break_min_up() { //Aumenta os minutos
    if (minbreak == 59) {
        minbreak = 0;
    }
    if (minbreak < 59 && minbreak >= 0) {
        minbreak++;
        $('#time-break-min').html(minbreak);
    }
}

function break_min_down() { //Diminui os minutos
    if (minbreak == 0) {
        minbreak = 59;
    }
    if (minbreak <= 59 && minbreak > 0) {
        minbreak--;
        $('#time-break-min').html(minbreak);
    }
}

function break_sec_up() { //Aumenta os segundos
    if (secbreak == 55) {
        secbreak = 0;
    }
    if (secbreak < 55 && secbreak >= 0) {
        secbreak = secbreak + 5;
        $('#time-break-sec').html(secbreak);
    }
}

function break_sec_down() { //Diminui os segundos
    if (secbreak == 0) {
        secbreak = 55;
    }
    if (secbreak <= 55 && secbreak > 0) {
        secbreak = secbreak - 5;
        $('#time-break-sec').html(secbreak);
    }
}