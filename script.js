const startingMinutes = 3;
let blackTime = startingMinutes * 60;
let whiteTime = startingMinutes * 60;

const blackClockElement = document.getElementById('black-countdown');
const whiteClockElement = document.getElementById('white-countdown');

setInterval(decrementBlackTime, 1000);
setInterval(decrementWhiteTime, 1000);

function decrementBlackTime() {
    if(blackTime !== 0) {
        blackTime--;
    }
    const minutes = Math.floor(blackTime / 60);
    let seconds = blackTime % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    blackClockElement.innerHTML = `${minutes}:${seconds}`;
}

function decrementWhiteTime() {
    if(whiteTime !== 0) {
        whiteTime--;
    }
    const minutes = Math.floor(whiteTime / 60);
    let seconds = whiteTime % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    whiteClockElement.innerHTML = `${minutes}:${seconds}`;
}