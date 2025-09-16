let player = document.querySelectorAll(".player")
const dice = document.querySelector("#dice")
const winner = document.querySelector("#header")
const playersNum = document.querySelectorAll(".players")
const playAgain = document.querySelector("#reset")

let game = document.querySelector("#game")
let gameOver = false

let randomNum = 0
let playerSteps = [0, 0]
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

squares[26].classList.add("snake")
squares[50].classList.add("snake")
squares[97].classList.add("snake")
squares[91].classList.add("snake")
let snakes = document.querySelectorAll(".snake")

squares[7].classList.add("ladder")
squares[58].classList.add("ladder")
squares[67].classList.add("ladder")
squares[36].classList.add("ladder")
let ladders = document.querySelectorAll(".ladder")

const playGame = () => {
  randomNum = Math.ceil(Math.random() * 6)
  randomNum = dice.innerText = randomNum
  steps += randomNum

  console.log("playerTurn", playerTurn)
  if (playerTurn === 0) {
    playerSteps[0] = steps
  } else if (playerTurn === 1) {
    playerSteps[1] = steps
  } else if (playerTurn === 2) {
    playerSteps[2] = steps
  } else {
    playerSteps[3] = steps
  }
  console.log(playerSteps)

  if (steps < 100) {
    squares[steps - 1].appendChild(player[playerTurn])
    // let poo = parseInt(squares[steps - 1].innerText)

    // for (let i = steps; i < poo; i++) {
    //   squares[i].append[playerTurn]
    //   squares[steps - 1].appendChild(player[playerTurn])
    // }
    // console.log(poo)

    if (squares[steps - 1].innerText === "8") {
      squares[steps + 20].appendChild(player[playerTurn])

      playerSteps[playerTurn] = parseInt(squares[steps + 20].innerText)
    } else if (squares[steps - 1].innerText === "37") {
      squares[steps + 7].appendChild(player[playerTurn])

      playerSteps[playerTurn] = parseInt(squares[steps + 7].innerText)
    } else if (squares[steps - 1].innerText === "59") {
      squares[steps + 21].appendChild(player[playerTurn])

      playerSteps[playerTurn] = parseInt(squares[steps + 21].innerText)
    } else if (squares[steps - 1].innerText === "68") {
      squares[steps + 25].appendChild(player[playerTurn])

      playerSteps[playerTurn] = parseInt(squares[steps + 25].innerText)
    }
  } else if (steps > 100) {
    playerSteps[playerTurn] = steps - randomNum
  } else {
    squares[steps - 1].appendChild(player[playerTurn])
    winner.innerText = "Winner!"
    gameOver = true
    steps = steps
  }

  if (!gameOver) {
    playerTurn++
    console.log(player.length)
    if (playerTurn > player.length - 1) {
      playerTurn = 0
    }
    steps = playerSteps[playerTurn]
  }
}

dice.addEventListener("click", playGame)

//https://www.w3schools.com/jsref/met_loc_reload.asp
playAgain.addEventListener("click", () => {
  location.reload()
})

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
