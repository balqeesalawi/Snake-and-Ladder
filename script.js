let player = document.querySelector(".player")
const squares = document.querySelectorAll(".square")
const snake = "snake"
const ladder = "ladder"
const dice = document.querySelector("#dice")

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = () => {
  const randomNum = Math.ceil(Math.random() * 6)
  dice.innerText = randomNum
}

dice.addEventListener("click", getRandomNumber)
