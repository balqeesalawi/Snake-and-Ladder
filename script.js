let player = document.querySelector(".player")
const snake = document.querySelector(".snake")
const ladder = document.querySelector(".ladder")
const dice = document.querySelector("#dice")
const winner = document.querySelector("#header")
const playersNum = document.querySelectorAll(".players")

let game = document.querySelector("#game")

let randomNum = 0
let steps = 0

const playerNumber = () => {
  if (playersNum[0]) {
    let newPlayer = document.createElement("div")
    newPlayer.classList.add("player")
  } else if (playersNum[1]) {
    let newPlayer = document.createElement("div")
    newPlayer.classList.add("player")
  }
}

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
console.log(squares)

// num = 1
// for (let i = 100; i >= 1; i--) {
//   let cells = document.createElement("div")
//   cells.classList.add("square")
//   game.appendChild(cells)
//   cells.innerText = num
//   num++
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = () => {
  randomNum = Math.ceil(Math.random() * 6)
  dice.innerText = randomNum
  steps += randomNum

  if (steps < 100) {
    squares[steps - 1].appendChild(player)
    console.log(steps)
    if (squares[steps - 1].innerText === "5 Ladder") {
      squares[steps + 3].appendChild(player) //taking player from 5 to 8
      steps = parseInt(squares[steps + 3].innerText)
      console.log(steps)
    } else if (squares[steps - 1].innerText === "8 Snake") {
      squares[steps - 6].appendChild(player) // taking player from 8 to 3
      steps = parseInt(squares[steps - 6].innerText)
      console.log(steps)
    }
  } else if (steps > 100) {
    steps = steps - randomNum
    console.log(steps)
  } else {
    squares[steps - 1].appendChild(player)
    winner.innerText = "Winner!"
  }
}

dice.addEventListener("click", getRandomNumber)
playerNumber.addEventListener("Click", playerNumber)
