let player = document.querySelectorAll(".player")
const snake = document.querySelector(".snake")
const ladder = document.querySelector(".ladder")
const dice = document.querySelector("#dice")
const winner = document.querySelector("#header")
const playersNum = document.querySelectorAll(".players")

let game = document.querySelector("#game")

let randomNum = 0
let playerSteps = [0, 0, 0, 0]
let playerTurn = 0
let steps = 0

let num = 1
for (let i = 0; i < 10; i++) {
  let rows = document.createElement("div")
  rows.classList.add("row")

  for (let j = 0; j < 10; j++) {
    let cells = document.createElement("div")
    cells.classList.add("square")
    cells.innerText = num
    rows.appendChild(cells)
    num++
  }
  game.appendChild(rows)
}
const squares = document.querySelectorAll(".square")

const getRandomNumber = () => {
  randomNum = Math.ceil(Math.random() * 6)
  dice.innerText = randomNum
  steps += randomNum

  console.log("playerTurn", playerTurn)
  if (playerTurn === 0) {
    steps = playerSteps[0]
    // playerTurn++
  } else if (playerTurn === 1) {
    steps = playerSteps[1]
    // playerTurn++
  } else if (playerTurn === 2) {
    steps = playerSteps[2]
    // playerTurn++
  } else {
    steps = playerSteps[3]
    // playerTurn++
  }

  if (steps < 100) {
    squares[steps - 1].appendChild(player[playerTurn])
    console.log(playerSteps)
  } else if (steps > 100) {
    steps = steps - randomNum
  } else {
    squares[steps - 1].appendChild(player[playerTurn])
    winner.innerText = "Winner!"
  }
  playerTurn++
}

dice.addEventListener("click", getRandomNumber)

// if (squares[playerSteps[0] - 1].innerText === "5 Ladder") {
//   squares[playerSteps[0] + 3].appendChild(player[playerTurn]) //taking player from 5 to 8
//   steps = parseInt(squares[playerSteps[0] + 3].innerText)
// } else if (squares[playerSteps[0] - 1].innerText === "8 Snake") {
//   squares[playerSteps[0] - 6].appendChild(player[playerTurn]) // taking player from 8 to 3
//   steps = parseInt(squares[playerSteps[0] - 6].innerText)
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
