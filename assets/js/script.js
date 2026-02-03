/* jshint esversion: 6 */
/* globals document */

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
const playerScoreTableEl = document.getElementById('player-score-table');
const computerScoreTableEl = document.getElementById('computer-score-table');
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

/** Generates a random computer choice from the available options */
function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

/** Compares player and computer choices and returns the winner ('player', 'computer', or 'draw') */
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

/** Main game function - validates input, processes a round, updates scores and display */
function play(playerChoice) {
    if (!choices.includes(playerChoice)) {
        updateDisplay("Invalid choice. Please select a valid move.");
        return;
    }

    if (gamesPlayed >= maxGames) {
        updateDisplay("Game limit reached. Please reset to play again.");
        showFinalMessage();
        return;
    }

    const computerChoice = getRandomChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    let message = 'You chose ' + playerChoice + ', computer chose ' + computerChoice + '. ';

    if (winner === 'player') {
        playerScore++;
        playerWins++;
        message += "You win!";
        setResultColor('win');
    } else if (winner === 'computer') {
        computerScore++;
        computerWins++;
        message += "Computer wins!";
        setResultColor('lose');
    } else {
        drawCount++;
        message += "It's a draw!";
        setResultColor('draw');
    }

    gamesPlayed++;
    updateDisplay(message);
    updateScoreboard();

    if (gamesPlayed === maxGames) {
        showFinalMessage();
    }
}

/** Calculates the player's win percentage excluding draws */
function calculateWinPercentage() {
    const totalGames = playerWins + computerWins;
    return totalGames === 0 ? 0 : ((playerWins / totalGames) * 100).toFixed(2);
}

/** Applies a color class to the message element based on the round result */
function setResultColor(result) {
    messageEl.classList.remove('result--win', 'result--lose', 'result--draw');
    messageEl.classList.add('result--' + result);
}

/** Triggers a brief scale animation on score value elements in the header */
function pulseScore() {
    playerScoreEl.style.animation = 'none';
    computerScoreEl.style.animation = 'none';
    // Force a reflow so the animation restarts when re-applied
    void playerScoreEl.offsetHeight;
    void computerScoreEl.offsetHeight;
    playerScoreEl.style.animation = 'scorePulse 0.3s ease';
    computerScoreEl.style.animation = 'scorePulse 0.3s ease';
}

/** Updates all score-related DOM elements including the scoreboard, score display, and round indicator */
function updateScoreboard() {
    playerScoreEl.innerText = playerScore;
    computerScoreEl.innerText = computerScore;
    playerScoreTableEl.innerText = playerScore;
    computerScoreTableEl.innerText = computerScore;
    drawCountEl.innerText = drawCount;
    winRatioEl.innerText = 'Wins: ' + playerWins + ' - Losses: ' + computerWins + ' - Draws: ' + drawCount;
    winPercentageEl.innerText = 'Win Percentage: ' + calculateWinPercentage() + '%';
    gamesPlayedEl.innerText = 'Games Played: ' + gamesPlayed;
    playerScoreResultEl.innerText = playerScore;
    computerScoreResultEl.innerText = computerScore;
    if (gamesPlayed >= maxGames) {
        roundIndicatorEl.innerText = 'Game Over';
    } else {
        roundIndicatorEl.innerText = 'Round ' + (gamesPlayed + 1) + ' of ' + maxGames;
    }
    pulseScore();
}

/** Updates the result message displayed to the user */
function updateDisplay(message) {
    messageEl.innerText = message;
}

/** Displays the game-over modal with the final match result */
function showFinalMessage() {
    finalMessageEl.classList.remove('result--win', 'result--lose', 'result--draw');
    if (playerWins > computerWins) {
        finalMessageEl.innerText = "Congratulations, You Won!";
        finalMessageEl.classList.add('result--win');
    } else if (computerWins > playerWins) {
        finalMessageEl.innerText = "Hard Luck, Computer Wins!";
        finalMessageEl.classList.add('result--lose');
    } else {
        finalMessageEl.innerText = "It's a Draw! Well Played!";
        finalMessageEl.classList.add('result--draw');
    }
    gameEndModalEl.style.display = 'block';
    document.getElementById('play-again-button').focus();
}

/** Hides the game-over modal and returns focus to the game area */
function closeModal() {
    gameEndModalEl.style.display = 'none';
    document.querySelector('.choice-btn').focus();
}

/** Resets all scores and game state to initial values for a new match */
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerWins = 0;
    computerWins = 0;
    drawCount = 0;
    gamesPlayed = 0;
    messageEl.classList.remove('result--win', 'result--lose', 'result--draw');
    updateDisplay('Game has been reset. Choose your move!');
    updateScoreboard();
    closeModal();
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

// Attach event listener to Play Again button in modal
document.getElementById('play-again-button').addEventListener('click', resetGame);

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && gameEndModalEl.style.display === 'block') {
        closeModal();
    }
});
