// True if the user guessed the word
let guessed = false;

// Total number of attempts available for each word
const totalAttempts = 6;

// List of words that are available for guessing
const words = [
    "atmosphere",
    "climate",
    "condensate",  
    "precipitate",
    "sun",
    "cycle",
    "weather",
    "droplet",
    "vapor",
    "river",
    "evaporate",
    "salty",
    "earth", 
    "lake",
    "cycle", 
    "vapor", 
    "layer",
    "sun",
    "water",
    "cloud",
    "land",
    "flow",
    "snow",
    "rock",
    "energy", 
];

// Randomly word picked from the list of words, initially empty.
let selectedWord = "";

// Initial number of guesses for each word
let guessesLeft = totalAttempts;

/**
 * @param newHint { string } new hint for the user
 */
function setHint(newHint) {
    // hint span element
    document.getElementById("hint").textContent = newHint;
}

/**
 * @param count { number } number of attempts done by the user
 */
function setAttempts(count) {
    // remainingAttempts span
    document.getElementById("remainingAttempts").textContent = count.toString();
}

/**
 * @param count { number } number of characters in the word
 */
function setWordCountHint(count) {
    setHint(`the word has ${count} letter${count === 1 ? '' : 's'}`);
}

/**
 * Shows the game popup.
 */
function showGameGuess() {
    setInputStatus(true);

    // Clear input field
    document.getElementById("guess").value = "";

    // Select a random word
    selectedWord = words[Math.floor(Math.random() * words.length)];
    setWordCountHint(selectedWord.length);
    setAttempts(guessesLeft);

    // set the maximum length of the input box to be as the word's
    const inputDiv = document.getElementById('guess');
    inputDiv.maxLength = selectedWord.length;

    document.getElementById('popup').style.display = 'block';
}

/**
 * Closes the popup, resets all parameters.
 */
function closeGameGuess() {
    // Hide the game popup
    document.getElementById('popup').style.display = 'none';
    guessesLeft = totalAttempts;

    // Remove previous attempts
    document.getElementById('attempts').innerHTML = "";
    guessed = false;
}

/**
 * @returns a word row for the attempts div
 */
function generateWordRow() {
    return document.createElement('div');
}

/**
 * @param status { boolean } true enables btn, false disables.
 */
function setInputStatus(status) {
    document.getElementById('guess').disabled = !status;
}

/**
 * Checks the user's guess, then modifies the visuals accordingly.
 */
function checkGuess() {
    const guess = document.getElementById('guess').value.toLowerCase();

    if (guess.length < selectedWord.length) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
        Toast.fire({
            icon: 'error',
            title: 'The number of letters should be '  + selectedWord.length + '.'
        });

        return;
    }
    const attemptsDiv = document.getElementById('attempts');
    const attemptDiv = generateWordRow();

    // add the current attempt to the attempts container
    attemptsDiv.appendChild(attemptDiv);

    for (let i = 0; i < guess.length; i++) {
        const span = document.createElement('span');
        span.className = 'letter';
        span.innerText = guess[i];

        if (i < selectedWord.length && guess[i] === selectedWord[i]) {
            span.classList.add('green');
        } else if (selectedWord.includes(guess[i])) {
            span.classList.add('yellow');
        } else {
            span.classList.add('grey');
        }

        attemptDiv.appendChild(span);
    }

    // reduce attempts
    guessesLeft--;

    if (guess === selectedWord || guessesLeft <= 0) {
        if (guess === selectedWord) {
            guessed = true;
            confetti();
            setInputStatus(false);
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
            Toast.fire({
                icon: 'error',
                title: 'Out of guesses.\nThe word was: ' + selectedWord + '.'
            });
            setTimeout(function() {
                closeGameGuess();
            }, 500);
        }
    }
    updateAttempts();
}

/**
 * Updates the attempts count
 */
function updateAttempts() {
    setAttempts(guessesLeft);
}

// Add listener for the enter key.
document.getElementById('guess').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('submit_guess').click();
    }
});
