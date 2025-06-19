function getComputerChoice() {
   let numChoice = parseInt(getRandom(1,3)) //Gets a random number between 1 and 3 inclusive
   if (numChoice == 1) {
    return "rock"
   } else if (numChoice == 2) {
    return "paper"
   } else if (numChoice == 3) {
    return "scissors"
   }
}

function getRandom(min, max) {  //Generates a random number between min and max inclusive
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getHumanChoice() {
    let choice = prompt("Enter your choice:")
    return choice
}



function playGame() {
   let humanScore = 0, computerScore = 0
   function playRound(humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase()
      computerChoice = computerChoice.toLowerCase()
      
      if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "!")
        computerScore++
      } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!")
        humanScore++
      } else {
        console.log("It's a draw!")
      }

}

for (let i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
}
console.log("")
if (humanScore > computerScore) {
    console.log("You Win!!!")
    console.log("Your score was: " + humanScore + ", and opponent's score was: " + computerScore)
} else if (computerScore > humanScore) {
    console.log("You Lose!!!")
    console.log("Your score was: " + humanScore + ", and opponent's score was: " + computerScore)
} else {
    console.log("It was a draw!!!")
    console.log("Your score was: " + humanScore + ", and opponent's score was: " + computerScore)
}
}




playGame()


