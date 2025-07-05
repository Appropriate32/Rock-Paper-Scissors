function getComputerChoice() {
   let numChoice = parseInt(getRandom(1,3)) //Gets a random number between 1 and 3 inclusive
   if (numChoice == 1) {
    return "rock";
   } else if (numChoice == 2) {
    return "paper";
   } else if (numChoice == 3) {
    return "scissors";
   }
}

function getRandom(min, max) {  //Generates a random number between min and max inclusive
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase();
      computerChoice = computerChoice.toLowerCase();

      const result = document.querySelector(".result");
      const display = document.querySelector(".display");
      const winStatement = document.querySelector(".winStatement");
      let showYourScore = document.querySelector(".yourScore");
      let showComputerScore = document.querySelector(".computerScore");
      let humanUse = document.querySelector(".humanUse");
      let computerUse = document.querySelector(".computerUse");


      if ((humanChoice == "rock" && computerChoice == "paper" && humanScore < 5 && computerScore < 5) || (humanChoice == "paper" && computerChoice == "scissors" && humanScore < 5 && computerScore < 5) || (humanChoice == "scissors" && computerChoice == "rock" && humanScore < 5 && computerScore < 5)) {
        humanUse.textContent = `You used ${humanChoice}!`;
        computerUse.textContent = `Computer used ${computerChoice}!`;
        result.textContent = "You lose! " + computerChoice + " beats " + humanChoice + "!";
        computerScore++
      } else if ((humanChoice == "rock" && computerChoice == "scissors" && humanScore < 5 && computerScore < 5) || (humanChoice == "paper" && computerChoice == "rock" && humanScore < 5 && computerScore < 5) || (humanChoice == "scissors" && computerChoice == "paper" && humanScore < 5 && computerScore < 5)) {
        humanUse.textContent = `You used ${humanChoice}!`;
        computerUse.textContent = `Computer used ${computerChoice}!`;
        result.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!";
        humanScore++;
      } else {
        humanUse.textContent = `You used ${humanChoice}!`;
        computerUse.textContent = `Computer used ${computerChoice}!`;
        result.textContent = "It's a draw!";
      }
      
      showYourScore.textContent = `Your Score: ${humanScore}`;
      showComputerScore.textContent = `Computer Score: ${computerScore}`;
      if (humanScore == 5) {
        winStatement.textContent = `You Win!!!`;
      } else if (computerScore == 5) {
        winStatement.textContent = `You Lose!!! Computer Wins.`;
      }
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});





