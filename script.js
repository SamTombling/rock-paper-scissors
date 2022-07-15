
let pScore = 0;
let cScore = 0;


function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(computerSelection, playerSelection) {
    
    if (computerSelection == "rock") {
        switch (playerSelection) {
            case "rock":
                return "It's a tie!";                
            case "paper":
                pScore++
                return "You win! Paper beats rock";                
            case "scissors":
                cScore++
                return "You lose! Rock beats Scissors";
        }
    } else if (computerSelection == "paper") {
        switch (playerSelection) {
            case "paper":
                return "It's a tie!";
            case "rock":
                cScore++
                return "You lose! Paper beats rock";
            case "scissors":
                pScore++
                return "You win! Scissors beats Paper";
        }
    } else if (computerSelection == "scissors") {
        switch (playerSelection) {
            case "scissors":
                return "It's a tie!";
            case "rock":
                pScore++
                return "You win! Rock beats scissors";
            case "paper":
                cScore++
                return "You lose! Scissors beats Paper";
        }
    }
}


const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');


buttons.forEach((button) => {
    button.addEventListener('click', () => {             
        const computerSelection = computerPlay();   
        result.textContent = 'Result: ' + playRound(computerSelection, button.className); 
        playerScore.textContent = 'Player Score: ' + pScore;      
        computerScore.textContent = 'Computer Score: ' + cScore;
        
        if (pScore == 5) {
            alert('Player wins!');
            return;
        }        
        if (cScore == 5) {
            alert('Computer wins!');
            return;
        }
    });
});



