const choices = document.querySelectorAll(".choice");

const result = document.getElementById("result");

const userScoreElement = document.getElementById("user-score");

const computerScoreElement = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    playRound(userChoice, computerChoice);
  });
});

function playRound(user, computer) {
  if (user === computer) {
    showResult(`🤝 It's a Tie! Both chose ${user}`, "#ffb347");
    return;
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    userScore++;
    showResult(`🎉 You Win! ${user} beats ${computer}`, "#4caf50");
  } else {
    computerScore++;
    showResult(`💻 Computer Wins! ${computer} beats ${user}`, "#f44336");
  }

  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
}

function showResult(message, color) {
  result.textContent = message;
  result.style.color = color;
}
