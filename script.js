function getComputerChoice() {
  const randomNumber = Math.random();

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

function playRound(getHumanChoice, computerChoice) {
  switch(getHumanChoice) {
    case "rock":
      if(computerChoice === "scissors") {
        return "You win! Rock beats Scissors";
        humanScore++;
      } else if(computerChoice === "paper") {
        return "You lose! Paper beats Rock";
        computerScore++;
      } else {
        return "It's a tie";
      }
      break;
    
    case "paper":
      if(computerChoice === "rock") {
        return "You win! Paper beats Rock";
        humanScore++;
      } else if(computerChoice === "scissors") {
        return "You lose! Scissors beats Paper";
        computerScore++;
      } else {
        return "It's a tie";
      }
      break;
    
    case "scissors":
      if(computerChoice === "paper") {
        return "You win! Scissors beats paper";
        humanScore++;
      } else if(computerChoice === "rock") {
        return "You lose! Rock beats Scissors";
        computerScore++;
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Hello World");
console.log(playRound(humanSelection, computerSelection));
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);

console.log("Human choice was: " + humanSelection);
console.log("Computer choice was: " + computerSelection);
