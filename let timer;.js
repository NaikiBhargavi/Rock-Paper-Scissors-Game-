let timer;

// Function to handle the play button click
function playGame(playerMove) {
    // Clear any existing timers
    clearTimeout(timer);

    // Your existing game logic...
}

// Function to start the timer
function startTimer() {
    const timerDuration = 10000; // 10 seconds in milliseconds

    timer = setTimeout(() => {
        // Call your function to handle the game result when the timer expires
        handleTimeout();
    }, timerDuration);
}

// Function to handle the game result when the timer expires
function handleTimeout() {
    const resultElement = document.querySelector('.js-result');
    resultElement.textContent = 'Time is up!';

    // Call your function to determine the result based on the player's move
    // (You may want to adjust this part based on your existing game logic)
    // Example: determineGameResult(playerMove, computerMove);

    // Clear any other elements, moves, etc., if needed
}

// Function to reset the timer
function resetTimer() {
    clearTimeout(timer);
    startTimer();
}

// Your existing code...

// Add event listeners using JavaScript
document.getElementById('rockBtn').addEventListener('click', () => {
    playGame('rock');
    resetTimer();
});

document.getElementById('paperBtn').addEventListener('click', () => {
    playGame('paper');
    resetTimer();
});

document.getElementById('scissorsBtn').addEventListener('click', () => {
    playGame('scissors');
    resetTimer();
});