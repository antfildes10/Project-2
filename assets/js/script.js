// Game state variables
let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;
let drawCount = 0;
let gamesPlayed = 0;
const maxGames = 10;

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Cache DOM elements for efficiency and maintainability
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const drawCountEl = document.getElementById('draw-count');
const winRatioEl = document.getElementById('win-ratio');
const winPercentageEl = document.getElementById('win-percentage');
const gamesPlayedEl = document.getElementById('games-played');
const messageEl = document.getElementById('message');
const playerScoreResultEl = document.getElementById('player-score-result');
const computerScoreResultEl = document.getElementById('computer-score-result');
const finalMessageEl = document.getElementById('final-message');
const gameEndModalEl = document.getElementById('game-end-modal');
const roundIndicatorEl = document.getElementById('round-indicator');

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if ((player === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
        (player === 'paper' && (computer === 'rock' || computer === 'spock')) ||
        (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
        (player === 'lizard' && (computer === 'spock' || computer === 'paper')) ||
        (player === 'spock' && (computer === 'scissors' || computer === 'rock'))) {
        return 'player';
    } else {
        return 'computer';
    }
}

function play(playerChoice) {
    if (gamesPlayed >= maxGames) {
        updateDisplay("Game limit reached. Please reset to play again.");
        showFinalMessage();
        return;
    }

    const computerChoice = getRandomChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    let message = `You chose ${playerChoice}, computer chose ${computerChoice}. `;

    if (winner === 'player') {
        playerScore++;
        playerWins++;
        message += "You win!";
    } else if (winner === 'computer') {
        computerScore++;
        computerWins++;
        message += "Computer wins!";
    } else {
        drawCount++;
        message += "It's a draw!";
    }

    gamesPlayed++;
    updateDisplay(message);
    updateScoreboard();

    if (gamesPlayed === maxGames) {
        showFinalMessage();
    }
}

function calculateWinPercentage() {
    const totalGames = playerWins + computerWins;
    return totalGames === 0 ? 0 : ((playerWins / totalGames) * 100).toFixed(2);
}

function updateScoreboard() {
    playerScoreEl.innerText = playerScore;
    computerScoreEl.innerText = computerScore;
    drawCountEl.innerText = drawCount;
    winRatioEl.innerText = `Wins: ${playerWins} - Losses: ${computerWins} - Draws: ${drawCount}`;
    winPercentageEl.innerText = `Win Percentage: ${calculateWinPercentage()}%`;
    gamesPlayedEl.innerText = `Games Played: ${gamesPlayed}`;
    playerScoreResultEl.innerText = playerScore;
    computerScoreResultEl.innerText = computerScore;
    if (gamesPlayed >= maxGames) {
        roundIndicatorEl.innerText = 'Game Over';
    } else {
        roundIndicatorEl.innerText = 'Round ' + (gamesPlayed + 1) + ' of ' + maxGames;
    }
}

function updateDisplay(message) {
    messageEl.innerText = message;
}

function showFinalMessage() {
    if (playerWins > computerWins) {
        finalMessageEl.innerText = "Congratulations, You Won!";
    } else {
        finalMessageEl.innerText = "Hard Luck, Computer Wins!";
    }
    gameEndModalEl.style.display = 'block';
}

function closeModal() {
    gameEndModalEl.style.display = 'none';
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerWins = 0;
    computerWins = 0;
    drawCount = 0;
    gamesPlayed = 0;
    updateDisplay('Game has been reset. Choose your move!');
    updateScoreboard();
}

// Attach event listeners to game buttons
const gameButtons = document.querySelectorAll('[data-choice]');
gameButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        play(this.getAttribute('data-choice'));
    });
});

// Attach event listener to reset button
document.getElementById('reset-button').addEventListener('click', resetGame);

// Attach event listener to modal close button
document.getElementById('close-modal').addEventListener('click', closeModal);
