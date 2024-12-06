const options = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playAgain = document.getElementById("playAgain");

let playerChoice;

function playGame(){

    const computerChoice = options[Math.floor(Math.random() * 3)]
    let result = "";

    if(playerChoice === computerChoice)
    {
        result = "It's a draw!";
    }
    else
    {
        switch(playerChoice)
        {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "Aw man! You lost...";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "Aw man! You lost...";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "Aw man! You lost...";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    playAgain.textContent = "(choose a new hand, or refresh the page to play again)";
}

function startGame() {
    var x = document.getElementById("game");
    var y = document.getElementById("start");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";

    } else {
      x.style.display = "none";
    }
  }