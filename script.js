console.log("Hello World");

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

console.log(getComputerChoice());

function getHumanChoice() {

  let userInput = prompt('"rock" "paper" or "scissors"?');

  if (userInput.toLowerCase() === "rock" || userInput.toLowerCase() === "paper" || userInput.toLowerCase() === "scissors") {
    return userInput.toLowerCase();
  }
}

console.log(getHumanChoice());