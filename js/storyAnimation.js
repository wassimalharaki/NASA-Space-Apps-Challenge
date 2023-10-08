// Earth image
const earth = document.getElementById("earth");

// Front card text
const frontCardText = document.getElementById("frontCardText");

// Back card text
const backCardText = document.getElementById("backCardText");

// true card is on front, otherwise false
let onFront = true;

let chapter = 0;

/**
 * Flips the card.
 */
function flip() {
    if (onFront) {
        document.getElementById("flipCardInner").style.transform = "rotateY(180deg)";
    } else {
        document.getElementById("flipCardInner").style.transform = "rotateY(0)";
    }

    onFront = !onFront;
}

/**
 * @param text { string } to be typed
 * @param index { number | undefined } to start at
 */
function type(text, index) {
    const typewriter = onFront ? frontCardText : backCardText;

    if (index === undefined) {
        index = 0;
    }

    if (index <= text.length) {
        typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
        setTimeout(() => type(text, index + 1), 50);
    }
}

/**
 * @param percentage { number } greyness of earth
 */
function greyEarth(percentage) {
    earth.style.filter = `grayscale(${percentage})`;
}

/**
 * Does the work for the story narration
 */
function narrateStory() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
            if (chapter) {
                flip();
            }

            switch (chapter) {
                case 0:
                    type(
                        "On Earth, a heavy sigh echoed through the planet's core as its forests burned, oceans warmed, and ice caps melted. The once-pristine sky was now shrouded in a thick blanket of smog.",
                        0
                    );
                    greyEarth(0.2);
                    break;
                case 1:
                    type(
                        "People, much like us, observed the unraveling beauty of their world with a sense of helplessness. The sunsets, once vibrant and breathtaking, vanished behind a suffocating veil of pollution.",
                        0
                    );
                    greyEarth(0.4);
                    break;
                case 2:
                    type(
                        "Despite the looming catastrophe, these young souls remained passive, entranced by their own distractions. Activism and rallying cries fell on deaf ears.",
                        0
                    );
                    greyEarth(0.6);
                    break;
                case 3:
                    type(
                        "As the crisis worsened, their indifference continued. The world's leaders remained divided and paralyzed by inaction, while fossil fuels blazed, pushing Earth's temperature to disastrous heights.",
                        0
                    );
                    greyEarth(0.8);
                    break;
                case 4:
                    type(
                        "In the end, the persons' apathy sealed their fate. Earth's ecosystems crumbled, and catastrophes multiplied unchecked. Their planet, once teeming with life, became a lifeless, barren wasteland. The persons who had the power to make a difference chose to do nothing, and Earth paid the ultimate price, a tragic reminder of humanity's failure to act when it mattered most.",
                        0
                    );
                    greyEarth(1);
                    break;
                case 5:
                    window.location.href = "reflection.html";
            }

            chapter++;
        }
    });
}

// Start narration
setTimeout(() => {
    type("Press the down arrow to navigate", 0);
    narrateStory();
}, 1500);
