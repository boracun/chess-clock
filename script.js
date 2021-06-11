const startingMinutes = 3;
let blackTime = startingMinutes * 60;
let whiteTime = startingMinutes * 60;
let turnOfWhite = true;

const blackClockElement = document.getElementById('black-countdown');
const whiteClockElement = document.getElementById('white-countdown');

const blackSpace = document.getElementById('black');
const whiteSpace = document.getElementById('white');

blackSpace.addEventListener('click', function() {
    turnOfWhite = true;
    document.getElementById('black-turn').style.color = "#292929";
    document.getElementById('white-turn').style.color = "green";
});

whiteSpace.addEventListener('click', function() {
    turnOfWhite = false;
    document.getElementById('black-turn').style.color = "green";
    document.getElementById('white-turn').style.color = "white";
});

document.getElementById('black-turn').style.color = "#292929";
document.getElementById('white-turn').style.color = "green";

var intervalId = setInterval(manageClock, 1000);

function manageClock() {
    if(turnOfWhite) {
        decrementWhiteTime();
    }
    else {
        decrementBlackTime();
    }
}

function decrementBlackTime() {
    if(blackTime !== 0) {
        blackTime--;
    }
    else {
        clearInterval(intervalId);
        alert("White won on time");
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
    else {
        clearInterval(intervalId);
        alert("Black won on time");
    }
    const minutes = Math.floor(whiteTime / 60);
    let seconds = whiteTime % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    whiteClockElement.innerHTML = `${minutes}:${seconds}`;
}