function computerPlay() {
    var choices = ["rock", "paper", "scissors"];
    var random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player !== computer && winCon[player] === computer) {
        return 0;
    }
    if (player === computer) {
        return 1;
    }
    return 2;
}

function endGame(player, computer) {
    if (player > computer) {
        return "You Win!";
    }
    if (computer > player) {
        return "You Lose!";
    }
    return "Draw!";
}

let winCon = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

let computerScore = 0;
let playerScore = 0;
let rounds = 1;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let computer = computerPlay();
        let game = playRound(button.id, computer);
        document.getElementById('choice').innerHTML = `Player chose ${button.id}, computer chose ${computer}`;
        rounds++
        document.getElementById('rounds').innerHTML = `Round: ${rounds}`
        if (game === 0) {
            playerScore++
        } else if (game === 2) {
            computerScore++
        }
        document.getElementById('score').innerHTML = `Player: ${playerScore}, Computer: ${computerScore}`;
        console.log(`round ${rounds-1} player ${playerScore} cpu ${computerScore}`);
        if (rounds > 5) {
            document.getElementById('rounds').innerHTML = `${endGame(playerScore, computerScore)}`;
        }
    });
});

