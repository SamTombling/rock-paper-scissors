function capitalise(string) {
    ;
}

function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(computerSelection, playerSelection) {

    playerSelection = playerSelection.toLowerCase();
    
    if (computerSelection == "rock") {
        switch (playerSelection) {
            case "rock":
                return "It's a tie!";
                break;
            case "paper":
                return "You win! Paper beats rock";
                break;
            case "scissors":
                return "You lose! Rock beats Scissors";
        }
    } else if (computerSelection == "paper") {
        switch (playerSelection) {
            case "paper":
                return "It's a tie!";
                break;
            case "rock":
                return "You lose! Paper beats rock";
                break;
            case "scissors":
                return "You win! Scissors beats Paper";
        }
    } else if (computerSelection == "scissors") {
        switch (playerSelection) {
            case "scissors":
                return "It's a tie!";
                break;
            case "rock":
                return "You win! Rock beats scissors";
                break;
            case "paper":
                return "You lose! Scissors beats Paper";
        }
    }
}

function game() {

    for(let i = 0; i <5; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors: ")
        const computerSelection = computerPlay();
        console.log(playRound(computerSelection, playerSelection));
    }
}

game();
