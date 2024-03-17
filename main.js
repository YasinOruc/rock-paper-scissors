function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose, scissors beats paper!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win, scissors beats paper!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose, rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        return "Invalid input";
    }
}
