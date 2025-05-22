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

function getHumanChoice() {

  let userInput = prompt('"rock" "paper" or "scissors"?');

  if (userInput.toLowerCase() === "rock" || userInput.toLowerCase() === "paper" || userInput.toLowerCase() === "scissors") {
    return userInput.toLowerCase();
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


  for(let i = 0; i < 5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }
  
  console.log("Human score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

playGame();
