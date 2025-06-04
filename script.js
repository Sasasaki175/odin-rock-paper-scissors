function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber * 3 <= 1){
    return "rock";
  } else if (randomNumber * 3 <= 2){
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame() {
  function playRound(getHumanChoice, computerChoice) {
    switch(getHumanChoice) {
      case "rock":
        if(computerChoice === "scissors") {
          humanScore++;
          return "You win! Rock beats Scissors";
        } else if(computerChoice === "paper") {
          computerScore++;
          return "You lose! Paper beats Rock";
        } else {
          return "It's a tie";
        }
        break;
      
      case "paper":
        if(computerChoice === "rock") {
          humanScore++;
          return "You win! Paper beats Rock";
        } else if(computerChoice === "scissors") {
          computerScore++;
          return "You lose! Scissors beats Paper";
        } else {
          return "It's a tie";
        }
        break;
      
      case "scissors":
        if(computerChoice === "paper") {
          humanScore++;
          return "You win! Scissors beats paper";
        } else if(computerChoice === "rock") {
          computerScore++;
          return "You lose! Rock beats Scissors";
        } else {
          return "It's a tie";
        }
        break;
      
      default:
        break;
    }
  }

  let humanScore = 0;
  let computerScore = 0;

  let rock = document.querySelector("#rock");
  let paper = document.querySelector("#paper");
  let scissors = document.querySelector("#scissors");

  let roundResult = document.querySelector("#round-result");
  let humanScoreLine = document.querySelector("#human-score");
  let computerScoreLine = document.querySelector("#computer-score");
  let gameResult = document.querySelector("#game-result");

  function updateRoundScore() {
    humanScoreLine.textContent = `Human score: ${humanScore}`;
    computerScoreLine.textContent = `Computer score: ${computerScore}`;
    updateGameResult();
  }
  
  function updateGameResult() {
    if (humanScore >= 5) {
      gameResult.textContent = "Congratulations! You have Won the Game!";
      gameOver = true;
    } 

    if (computerScore >= 5) {
      gameResult.textContent = "Game Over You've Lost...";
      gameOver = true;
    }
  }
 
  let gameOver = false;

  roundResult.textContent = "";
  humanScoreLine.textContent = "";
  computerScoreLine.textContent = "";
  gameResult.textContent = "";
  
  rock.addEventListener("click", () => {
    if (gameOver === false) {
      roundResult.textContent = playRound("rock", getComputerChoice());
      updateRoundScore();
    }   
  });

  paper.addEventListener("click", () => {
    if (gameOver === false) {
      roundResult.textContent = playRound("paper", getComputerChoice());
      updateRoundScore();
    }   
  });

  scissors.addEventListener("click", () => {
    if (gameOver === false) {
      roundResult.textContent = playRound("scissors", getComputerChoice());
      updateRoundScore();
    }   
  });
}

playGame();
