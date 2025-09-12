let player = document.querySelector(".player")
const squares = document.querySelectorAll(".square")
const snake = "snake"
const ladder = "ladder"
const dice = document.querySelector("#dice")
let randomNum = 0
let steps = 0

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = () => {
  randomNum = Math.ceil(Math.random() * 6)
  dice.innerText = randomNum
  if (randomNum) {
    steps = squares[randomNum].append(player)
  }
  console.log(`steps=${steps}`)
}

const movingPlayer = () => {}

dice.addEventListener("click", getRandomNumber)
