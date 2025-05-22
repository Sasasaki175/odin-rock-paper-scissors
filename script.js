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