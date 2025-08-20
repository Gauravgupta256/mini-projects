let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let lastSecond = new Date().getSeconds(); 
let secRotation = lastSecond * 6;

function displayTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hourRotation = 30 * hours + minutes / 2;
    let minuteRotation = 6 * minutes;
    if (seconds !== lastSecond) {
        secRotation += 6; 
        lastSecond = seconds;
    }

    hour.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minuteRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;
}

hour.style.transition = "none";
min.style.transition = "none";
sec.style.transition = "none";

displayTime();

setTimeout(() => {
  hour.style.transition = "transform 0.5s cubic-bezier(0.4, 2.3, 0.3, 1)";
  min.style.transition = "transform 0.5s cubic-bezier(0.4, 2.3, 0.3, 1)";
  sec.style.transition = "transform 0.2s linear"; 
}, 50);

setInterval(displayTime, 1000);
