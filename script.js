// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
let choices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
let wins = 0;
let losses = 0;
let ties = 0;

let userChoice = prompt("Enter your choice - Rock(r), Paper(p) or Scissors(s)");

let randomIndex = Math.floor(Math.random() * choices.length);
let computerChoice = choices[randomIndex];

if (userChoice === "r" ||
  userChoice === "p" ||
  userChoice === "s") {

  alert("You have chosen: " + userChoice);
  alert("Computer has chosen: " + computerChoice);

  if (userChoice === computerChoice) {
    ties = ties+1;
    alert("Its a tie.");
  } else if ((userChoice === "r" && computerChoice === "s") ||
              (userChoice === "p" && computerChoice === "r") ||
    (userChoice === "s" && computerChoice === "p")) {
    wins++;
    alert("You won!");
  } else {
    losses++;
    alert("You lost!");
  }
} else {
  alert("Wrong choice!");
}