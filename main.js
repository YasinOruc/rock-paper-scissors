function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log("Your enemy's choice:",choice)
    return choice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "lose";
    } else if (playerSelection === computerSelection) {
        return "tie";
    } else {
        return "invalid";
    }
}

function playGame(){
    let compScore = 0
    let playerScore = 0

    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose rock, paper, or scissors");
        console.log("Your choice:", playerSelection)
        const computerSelection = getComputerChoice()
        const result = playRound(playerSelection, computerSelection);


        if (result === "win"){
            playerScore++
            console.log("You win this round!")
        }   
        else if (result === "lose"){
            compScore++
            console.log("You lose this round!")
        }
        else if (result === "tie"){
            console.log("It's a tie!")
        }
        else {
            console.log("Invalid input. Try again.")
            i--;
            continue
        }
    }
    console.log(`Final Scores - Player: ${playerScore}, Computer: ${compScore}`);
    if (playerScore > compScore) {
        console.log("You win the game!");
    } else if (playerScore < compScore) {
        console.log("You lose the game :(");
    } else {
        console.log("It's a tie!");
    }
    }

playGame()