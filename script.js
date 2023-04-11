const guessInput = document.querySelector(".guess");
let score = document.querySelector(".score");
let highscore = document.querySelector(".label-highscore");
const correctNumber = document.querySelector(".number");
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const texts = document.querySelector(".message");
const bodyCorrect = document.getElementById("body");

let currentScore = 0;



function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  

correctNumber.value = generateRandomNumber()

guessInput.oninput = (e) => (e.target.value = e.target.value.replace("-", ""));

guessInput.addEventListener("input", function () {
  if (parseFloat(guessInput.value) > 100) {
    guessInput.value = 100;
  }
});

checkBtn.addEventListener("click", function () {
  if (guessInput.value == correctNumber.value) {
    document.getElementById("body").style.backgroundColor = "green";
    texts.innerHTML = "🎉 Correct number!";
    currentScore++;
    score.innerHTML = currentScore;
    highscore.innerHTML = "🥇 Highscore: " + score.innerHTML
  } else if (guessInput.value < correctNumber.value && guessInput.value > 0) {
    texts.innerHTML = "📉 Too low!";
    document.getElementById("body").style.backgroundColor = "";
    currentScore++;
    score.innerHTML = currentScore;
  } else if (guessInput.value > correctNumber.value) {
    document.getElementById("body").style.backgroundColor = "";
    texts.innerHTML = "📈 Too high!";
    currentScore++;
    score.innerHTML = currentScore;
  } else if (guessInput.value = " ") {
    document.getElementById("body").style.backgroundColor = "";
    texts.innerHTML = "⛔ No number!";
    currentScore++;
    score.innerHTML = currentScore;
  }
});

againBtn.addEventListener("click", function () {
  document.getElementById("body").style.backgroundColor = "#222";
  texts.innerHTML = "Start guessing...";
  guessInput.value = "";
  currentScore = 0;
  score.innerHTML = currentScore;
  correctNumber.value = generateRandomNumber();
//   console.log(correctNumber.value)
});

// console.log(correctNumber.value);