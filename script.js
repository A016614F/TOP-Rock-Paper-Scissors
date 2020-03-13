let winCondition = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player !== computer && winCondition[player] === computer) {
        playerScore++
        return "You Win!";
    }
    if (player === computer) {
        return "Draw!";
    }
    computerScore++
    return "You Lost!";

}

const buttons = document.querySelectorAll('.player');
buttons.forEach((img) => {
    img.addEventListener('click', (e) => {
        let computer = computerPlay();
        let game = playRound(img.id, computer);
        document.getElementById('cpu-choice').src = `images/hand-${computer}.png`;
        document.getElementById('result').innerHTML = game;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('cpu-score').innerHTML = computerScore;
    });
});

