const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let tempoTrascorso = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - tempoTrascorso;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        tempoTrascorso = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    tempoTrascorso = 0;
    isRunning = false;

    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    tempoTrascorso = currentTime - startTime;

    let ore = Math.floor(tempoTrascorso / (1000 * 60 * 60));
    let minuti = Math.floor(tempoTrascorso / (1000 * 60) % 60);
    let secondi = Math.floor(tempoTrascorso / 1000 % 60);
    let millisecondi = Math.floor(tempoTrascorso % 1000 / 10);

    ore = String(ore).padStart(2, "0");
    minuti = String(minuti).padStart(2, "0");
    secondi = String(secondi).padStart(2, "0");
    millisecondi = String(millisecondi).padStart(2, "0");

    display.textContent = `${ore}:${minuti}:${secondi}:${millisecondi}`;
}