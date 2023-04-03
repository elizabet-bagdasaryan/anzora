const guessInput = document.querySelector(".guess")
const score = document.querySelector(".score")
const highscore = document.querySelector(".label-highscore")
const correctNumber = document.querySelector(".number")
const againBtn = document.querySelector(".again")
const checkBtn = document.querySelector(".check")
const texts = document.querySelector(".message")
const bodyCorrect = document.getElementById("body")

guessInput.oninput = (e) => e.target.value = e.target.value.replace("-", "");

guessInput.addEventListener("input", function(){
if (parseFloat(guessInput.value) >100){
    guessInput.value=100
  }
})

correctNumber.value = Math.floor(Math.random() * 100) + 1;



checkBtn.addEventListener("click", function(){
    if(guessInput.value == correctNumber.value){
        document.getElementById("body").style.backgroundColor= "green"
        texts.innerHTML = "🎉 Correct number!"
      
    }else if(guessInput.value < correctNumber.value && guessInput.value > 0){
        texts.innerHTML = "📉 Too low!"
        document.getElementById("body").style.backgroundColor= ""
    }else if(guessInput.value > correctNumber.value){
        document.getElementById("body").style.backgroundColor= ""
        texts.innerHTML = "📈 Too high!"
    }else if(guessInput.value  =" "){
        document.getElementById("body").style.backgroundColor= ""
        texts.innerHTML = "⛔ No number!"
    }
})
console.log(correctNumber.value)