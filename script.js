let player = document.querySelector(".player")
const squares = document.querySelectorAll(".square")
const snake = document.querySelector(".snake")
const ladder = document.querySelector(".ladder")
const dice = document.querySelector("#dice")
let randomNum = 0
let steps = 0

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = () => {
  randomNum = Math.ceil(Math.random() * 6)
  dice.innerText = randomNum
  if (randomNum) {
    squares[randomNum - 1].append(player)
    randomNum += randomNum
  }
}

const movingPlayer = () => {}

dice.addEventListener("click", getRandomNumber)
