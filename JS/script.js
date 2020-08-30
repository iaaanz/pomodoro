//Temporizador Pomodoro

//Variaveis
var min = 30;
var sec = 0;
var milis = 0;
var minbreak = 5;
var secbreak = 0;
var cont;
var styleIniciar = document.getElementById('iniciar').style;
var styleParar = document.getElementById('parar').style;

function cronometro(){
    if (sec == 0 && min == 0) {
        clearInterval(cont)
        aler('dasdd')
    }
    else if (sec == 0) {
        sec = 60;
        min--;
    }
    if (milis == 0) { 
        milis = 99;
        sec--;
    }
    else {
        milis--;
    }
}

function timer_template(time, value) { //Formata a saida do txt
    if (value < 10){
        document.getElementById(time).innerText = '0' + value;
    }
    else {
        document.getElementById(time).innerText = value;
    }
}

function alterHover(id, colorIn, colorOut) { //Funcao pra alterar o hover
    $(id).hover(function(){
        $(this).css("background-color", colorIn);
        }, function(){
        $(this).css("background-color", colorOut);
        });
}

function iniciar() { //Inicia os timers
    var statusCron = document.getElementById('iniciar').textContent;
    if (statusCron == 'Iniciar'){
        clearInterval(cont);
        cont = setInterval(() => { timersession() }, 10);
        document.getElementById("iniciar").innerText = "Parar"; 
        document.getElementById("parar").innerText = "Reiniciar";
        styleIniciar.padding = '0px 20px 0px 20px';
        styleParar.display = 'inline'; 
        alterHover('#iniciar', "#CD0000", "");
        alterHover('#parar', "#FFCC00", "");;
    }
    else{
        clearInterval(cont);
        document.getElementById("iniciar").innerText = "Iniciar"; 
        styleIniciar.padding = '0px 120px 0px 120px';
        styleParar.display = 'none'; 
        alterHover('#iniciar', "#3e8e41", "");
    }
}

function reiniciar() {
    clearInterval(cont);
    min = document.getElementById('time-session-min').textContent;
    sec = document.getElementById('time-session-sec').textContent;
    milis = 0;
    cont = setInterval(() => { timersession() }, 10);
    document.getElementById("iniciar").innerText = "Parar"; 
    document.getElementById("parar").innerText = "Reiniciar";
    styleIniciar.padding = '0px 20px 0px 20px';
    styleParar.display = 'inline'; 
}

function timersession() { //Inicia o timer da session
    cronometro()
    timer_template('session-timer-min', min)
    timer_template('session-timer-sec', sec)
}

function timerbreak() { //Inicia o timer do break
    timer_template('session-timer-min', minbreak)
    timer_template('session-timer-sec', secbreak)
}

function session_min_up() { //Aumenta os minutos
    if (min == 59) {
        min = 0;
    }
    if (min < 59 && min >= 0) {
        min++;
        timer_template('time-session-min', min);
        timer_template('session-timer-min', min)
    }
}

function session_min_down() { //Diminui os minutos
    if (min == 0){
        min = 59
    }
    if (min <= 59 && min > 0) {
        min--;
        timer_template('time-session-min', min);
        timer_template('session-timer-min', min)
    }
}

function session_sec_up() { //Aumenta os segundos
    if (sec == 55){
        sec = 0
    }
    if (sec < 55 && sec >= 0) {
        sec++;
        sec++;
        sec++;
        sec++;
        sec++;
        timer_template('time-session-sec', sec);
        timer_template('session-timer-sec', sec)
    }
}

function session_sec_down() { //Diminui os segundos
    if (sec == 0){
        sec = 55
    }
    if (sec <= 55 && sec > 0) {
        sec--;
        sec--;
        sec--;
        sec--;
        sec--;
        timer_template('time-session-sec', sec);
        timer_template('session-timer-sec', sec)
    }
}
function break_min_up() { //Aumenta os minutos
    if (minbreak == 59) {
        minbreak = 0;
    }
    if (minbreak < 59 && minbreak >= 0) {
        minbreak++;
        timer_template('time-break-min', minbreak);
    }
}

function break_min_down() { //Diminui os minutos
    if (minbreak == 0){
        minbreak = 59
    }
    if (minbreak <= 59 && minbreak > 0) {
        minbreak--;
        timer_template('time-break-min', minbreak);
    }
}

function break_sec_up() { //Aumenta os segundos
    if (secbreak == 55){
        secbreak = 0
    }
    if (secbreak < 55 && secbreak >= 0) {
        secbreak++;
        secbreak++;
        secbreak++;
        secbreak++;
        secbreak++;
        timer_template('time-break-sec', secbreak);
    }
}

function break_sec_down() { //Diminui os segundos
    if (secbreak == 0){
        secbreak = 55
    }
    if (secbreak <= 55 && secbreak > 0) {
        secbreak--;
        secbreak--;
        secbreak--;
        secbreak--;
        secbreak--;
        timer_template('time-break-sec', secbreak);
    }
}