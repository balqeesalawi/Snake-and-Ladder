let player = document.querySelector(".player")
const squares = document.querySelectorAll(".square")
const snake = document.querySelector(".snake")
const ladder = document.querySelector(".ladder")
const dice = document.querySelector("#dice")
const winner = document.querySelector("#header")

let randomNum = 0
let steps = 0

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = () => {
  randomNum = Math.ceil(Math.random() * 6)
  dice.innerText = randomNum
  steps += randomNum
  squares[steps - 1].append(player)
  console.log(steps)

  if (squares[steps - 1].innerText === "5 Ladder") {
    squares[steps + 3].append(player)
    steps = parseInt(squares[steps + 3].innerText)
    console.log(steps)
  } else if (squares[steps - 1].innerText === "8 Snake") {
    squares[steps - 6].append(player)
    steps = parseInt(squares[steps - 6].innerText)
    console.log(steps)
  }

  if (steps === 10) {
    winner.innerText = "Winner!"
  }
}

const movingPlayer = () => {}

dice.addEventListener("click", getRandomNumber)
dice.addEventListener("click", movingPlayer)
