// This is a basic example. You will need to build on this for your final app.

const timerText = document.querySelector('.timer-text');
const startButton = document.querySelector('.start-button');
const landingPage = document.querySelector('.landing-page-content');
const body = document.body;

let endTime = 0;
let timerInterval;

function startTimer() {
    // Hide the button and start the timer logic
    startButton.style.display = 'none';
    body.classList.add('curtains-open'); // Assuming you have CSS for this animation

    endTime = Date.now() + (6 * 60 * 60 * 1000); // 6 hours in milliseconds

    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = Date.now();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerText.textContent = '00:00:00';
        // Add logic for what happens when the timer ends
        return;
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const formattedTime = 
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}`;
    
    timerText.textContent = formattedTime;
}

// Event listener for the start button
startButton.addEventListener('click', startTimer);