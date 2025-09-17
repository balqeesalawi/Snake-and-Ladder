let player = document.querySelectorAll(".player")
const dice = document.querySelector("#dice")
const winner = document.querySelector("#header")
const update = document.querySelector("#update")
const playersNum = document.querySelectorAll(".players")
const playAgain = document.querySelector("#reset")
const snakePopUp = document.querySelector("#snakePopUp")
const ladderPopUp = document.querySelector("#ladderPopUp")
const confirmation = document.querySelector(".confirm")

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

let snakeImg = document.createElement("img")
snakeImg.setAttribute("src", "./snake.gif")
snakeImg.style.width = "50px"
snakeImg.style.height = "40px"

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

const displaySnakePopUps = () => {
  snakePopUp.style.opacity = 1
  snakePopUp.style.animation = "bounceIn"
  snakePopUp.style.animationDuration = "2s"
  document.body.style.boxShadow = "inset 200px 200px 600px black"
}

const displayLadderPopUps = () => {
  ladderPopUp.style.opacity = 1
  ladderPopUp.style.animation = "bounceIn"
  ladderPopUp.style.animationDuration = "2s"
  document.body.style.boxShadow = "inset 200px 200px 600px black"
}

const checkForSnakeAndLadder = () => {
  if (squares[steps - 1].innerText === "8") {
    displayLadderPopUps()
    squares[steps + 20].appendChild(player[playerTurn])

    playerSteps[playerTurn] = parseInt(squares[steps + 20].innerText)
  } else if (squares[steps - 1].innerText === "37") {
    displayLadderPopUps()
    squares[steps + 7].appendChild(player[playerTurn])

    playerSteps[playerTurn] = parseInt(squares[steps + 7].innerText)
  } else if (squares[steps - 1].innerText === "59") {
    displayLadderPopUps()
    squares[steps + 21].appendChild(player[playerTurn])

    playerSteps[playerTurn] = parseInt(squares[steps + 21].innerText)
  } else if (squares[steps - 1].innerText === "68") {
    displayLadderPopUps()
    squares[steps + 25].appendChild(player[playerTurn])

    playerSteps[playerTurn] = parseInt(squares[steps + 25].innerText)
  } else if (squares[steps - 1].innerText === "27") {
    displaySnakePopUps()
    squares[steps - 23].appendChild(player[playerTurn])

    playerSteps[playerTurn] = parseInt(squares[steps - 23].innerText)
  } else if (squares[steps - 1].innerText === "51") {
    displaySnakePopUps()
    squares[steps - 3].appendChild(player[playerTurn])

    playerSteps[playerTurn] = parseInt(squares[steps - 3].innerText)
  } else if (squares[steps - 1].innerText === "92") {
    displaySnakePopUps()
    squares[steps - 22].appendChild(player[playerTurn])

    playerSteps[playerTurn] = parseInt(squares[steps - 22].innerText)
  } else if (squares[steps - 1].innerText === "98") {
    displaySnakePopUps()
    squares[steps - 64].appendChild(player[playerTurn])

    playerSteps[playerTurn] = parseInt(squares[steps - 64].innerText)
  }

  // if (snakes[i].appendChild(player[playerTurn])) {
  //   displaySnakePopUps()
  // } else if (ladders[i].appendChild(player[playerTurn])) {
  //   displayLadderPopUps()
  // }
}

const playGame = () => {
  randomNum = 8

  randomNum = dice.innerText = randomNum
  steps += randomNum
  update.innerText = `player ${playerTurn + 1} moved ${randomNum} steps`

  console.log("playerTurn", playerTurn)
  if (playerTurn === 0) {
    playerSteps[0] = steps
  } else {
    playerSteps[1] = steps
  }
  console.log(playerSteps)

  if (steps < 100) {
    squares[steps - 1].appendChild(player[playerTurn])
    checkForSnakeAndLadder()
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
