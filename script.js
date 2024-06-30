const stopWatch = document.querySelector(".stopwatch");

let hr = 0;
let min = 0;
let sec = 0;
let stopTime = true; //time is stopped

let startTimer = () => {
    if (stopTime === true) {
        stopTime = false; // turn on time
        timerCycle();
    }
}

let stopTimer = () => {
    if (stopTime === false) {
        stopTime = true; // turn off time
    }
}

let timerCycle = () => {
    if (stopTime === false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec ++;

        if (sec == 60) {
            min ++;
            sec = 0;
        }

        if (min == 60) {
            hr ++;
            min = 0;
            sec = 0
        }

        if (sec < 10) {
            sec = "0" + sec; // if sec is less than 10, add a leading zero
        }

        if (min < 10) {
            min = "0" + min; // if min is less than 10, add a leading zero
        }

        if (hr < 10) {
            hr = "0" + hr; // if hr is less than 10, add a leading zero
        }

        stopWatch.innerText = hr + ":" + min + ":" + sec;

        setTimeout("timerCycle()", 12); // call timerCycle function after 1 second => I make 12 so it work as millisecond
    }
}

let resetTimer = () => {
    stopWatch.innerText = "00:00:00";
    stopTime = true;
    hr = 0;
    min = 0;
    sec = 0;
}
