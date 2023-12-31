// True if the user guessed the word
let guessed = false;
let day = 1;
let score = 0;

window.onload = () => {
    Swal.fire({
        iconHtml: '<img src="./img/droplet_character_flipped_sad.png" style="border: none;"/>',
        title: 'Save Droplet!',
        text: "Your mission is to collect the most amount of droplets by playing guess the word to save Droplet.",
        customClass: {
            icon: 'no-border',
            confirmButton: 'swal-button-incfont'
        }
    });
};

// Total number of attempts available for each word
const totalAttempts = 5;

// List of words that are available for guessing
const words = [
    "water",
    "sun",
    "cycle",
    "weather",
    "vapor",
    "river",
    "salty",
    "earth", 
    "lake",
    "cycle", 
    "vapor", 
    "layer",
    "sun",
    "climate",
    "cloud",
    "land",
    "flow",
    "snow",
    "rock",
    "energy",
    "ocean",
    "sea",
    "tide",
    "rain",
    "brook",
    "stream",
    "ice",
    "polar",
    "current",
    "puddle",
    "frost",
    "pond",
    "spring",
    "rainbow",
    "hail",
    "spray",
    "mist",
    "surge",
    "brine",
    "marsh",
    "flood",
    "ripple",
    "dew",
    "drip",
    "splash",
    "soak",
    "drizzle",
    "spout",
    "pool",
    "wave",
    "bubble",
    "drink",
    "float",
    "sink",
    "shower",
    "drench",
    "wade",
    "creek",
    "bay",
    "beach",
    "swamp",
    "jet",
    "fountain",
    "spill",
    "streamlet",
    "delta",
    "lagoon",
    "channel"
];



// initialize the sound effect to be played
var soundEffect = new Audio(); 
soundEffect.src = "./sound_effects/success.mp3";

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

var random;
function showGameGuess() {
    setInputStatus(true);

    // Clear input field
    document.getElementById("guess").value = "";

    // Select a random word
    random = Math.floor(Math.random() * words.length);
    random = 0;
    selectedWord = words[random];
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
 * @param status { boolean } true enables input, false disables.
 */
function setInputStatus(status) {
    // Disables/! text input
    document.getElementById('guess').disabled = !status;

    // Disables/! btn
    document.getElementById('submit_guess').disabled = !status;
}

/**
 * Checks the user's guess, then modifies the visuals accordingly.
 */
function checkGuess() {
    const guess = document.getElementById('guess').value.toLowerCase().trim();

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
            title: '<p class="swal-stitle"> The number of letters should be '  + selectedWord.length + '.</p>'
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
            
            soundEffect.play();
            words.splice(random, 1);
            score+=3;
            updateGameScore();
            
            if (score == 3 * 66) {
                Swal.fire({
                    iconHtml: '<img src="./img/droplet_character_flipped.png" style="border: none;"/>',
                    title: 'Congratulations!',
                    text: "You save the world with a total of " + score + " droplets!",
                    customClass: {
                        icon: 'no-border'
                    }
                });
            };

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
                title: '<p class="swal-btitle">Out of guesses.\nThe word was: ' + selectedWord + '.</p>',
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
function updateGameScore() {
    document.getElementById("dropletCount").textContent = score.toString();
    document.getElementById("dateCount").textContent = (score / 3).toString();
}

