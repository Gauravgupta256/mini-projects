let loveResultsCache = {};

function typeWriterEffect(element, text, delay = 40) {
  element.innerHTML = "";
  let i = 0;
  let interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, delay);
}

function animateCircle(percent) {
  const circle = document.getElementById("percentageCircle");
  const progress = document.getElementById("progress");
  const text = document.getElementById("circleText");

  const circumference = 283; // 2 * π * 45

  circle.style.display = "block";
  progress.style.strokeDasharray = circumference;
  progress.style.strokeDashoffset = circumference;
  text.innerHTML = "0%";

  let current = 0;
  let animation = setInterval(() => {
    if (current >= percent) {
      clearInterval(animation);
    } else {
      current++;
      text.innerHTML = current + "%";
      progress.style.strokeDashoffset =
        circumference - (circumference * current) / 100;
    }
  }, 15);
}

function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const resultDiv = document.getElementById("result");
  const loadingDiv = document.getElementById("loading");
  const quoteDiv = document.getElementById("quote");

  if (!name1 || !name2) {
    alert("Please enter both names!");
    return;
  }

  const key = [name1, name2]
    .map((n) => n.toLowerCase().replace(/\s+/g, ""))
    .sort()
    .join("-");

  if (loveResultsCache[key]) {
    resultDiv.innerHTML = loveResultsCache[key];
    return;
  }

  resultDiv.innerHTML = "";
  loadingDiv.style.display = "block";
  document.getElementById("percentageCircle").style.display = "none";
  quoteDiv.style.opacity = 0;

  setTimeout(() => {
    loadingDiv.style.display = "none";

    let combined = key.replace("-", "");
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash = (hash + combined.charCodeAt(i) * 31) % 101;
    }
    const score = hash;
    

    let message = "";
    let quotes = [];
    if (score > 90) {
      quotes = [
        "Love is composed of a single soul inhabiting two bodies.",
        "In all the world, there is no heart for me like yours.",
        "Every love story is beautiful, but ours is my favorite.",
      ];
    } else if (score > 70) {
      quotes = [
        "The best thing to hold onto in life is each other.",
        "Where there is love, there is life.",
        "Together is a wonderful place to be.",
      ];
    } else if (score > 50) {
      quotes = [
        "Love is the flower you've got to let grow.",
        "The greatest thing you'll ever learn is just to love and be loved in return.",
        "Every heart sings a song, incomplete, until another heart whispers back.",
      ];
    } else {
      quotes = [
        "Sometimes the heart sees what is invisible to the eye.",
        "Love is not about possession, it's about appreciation.",
        "Every ending is a new beginning in disguise.",
      ];
    }

    const finalResult = `❤️ ${name1.toUpperCase()} & ${name2.toUpperCase()} have a ${score}% love connection ❤️\n\n${message}`;
    loveResultsCache[key] = finalResult;

    typeWriterEffect(resultDiv, finalResult, 25);
    animateCircle(score);

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setTimeout(() => {
      quoteDiv.innerHTML = `"${randomQuote}"`;
      quoteDiv.style.opacity = 1;
    }, 1500);

    localStorage.setItem("lastPair", JSON.stringify({ name1, name2 }));
  }, 2000);
}

window.onload = function () {
    let last = localStorage.getItem("lastPair");
    if (last) {
        console.log("Last saved pair:", JSON.parse(last));
    }
}
