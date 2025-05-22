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

let humanScore = 0;
let computerScore = 0;

console.log("Hello World");
console.log(getComputerChoice());
console.log(getHumanChoice());