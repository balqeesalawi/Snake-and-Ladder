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

  if (steps < 10) {
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
  } else if (steps > 10) {
    steps = steps - randomNum
    console.log(steps)
  } else {
    squares[steps - 1].appendChild(player)
    winner.innerText = "Winner!"
  }

  // } else if (steps === 10) {
  //   winner.innerText = "Winner!"
  // } else {

  //   let finalSteps = 0
  //   finalSteps = randomNum
  //   console.log(finalSteps)
  //   console.log(steps)
  // if (currentSquare + finalSteps === 10) {
  //   squares[9].appendChild(player)
  //   winner.innerText = "Winner!"
  // }
  // }
}

dice.addEventListener("click", getRandomNumber)
