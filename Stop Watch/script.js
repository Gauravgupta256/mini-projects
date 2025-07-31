window.onload = function() {
    let seconds = 0;
    let miliSeconds = 0;
    let interval;

    const addSeconds = document.querySelector('.seconds');
    const addMilliSeconds = document.querySelector('.milli');

    const startBtn = document.querySelector('.start-btn');
    const stopBtn = document.querySelector('.stop-btn');
    const resetBtn = document.querySelector('.reset-btn');

    startBtn.onclick = function() {
        clearInterval(interval); 
        interval = setInterval(start, 10);
    }

    stopBtn.onclick = function() {
        clearInterval(interval);
    }

    resetBtn.onclick = function() {
        clearInterval(interval);
        seconds = 0;
        miliSeconds = 0;
        addSeconds.innerHTML = "00";
        addMilliSeconds.innerHTML = "00";
    }

    function start() {
        miliSeconds++;

        if (miliSeconds === 100) {
            miliSeconds = 0;
            seconds++;
        }

      
        addMilliSeconds.innerHTML = miliSeconds < 10 ? "0" + miliSeconds : miliSeconds;
        addSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }
}
