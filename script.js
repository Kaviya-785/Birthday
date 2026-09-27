/* =========================
   FRIEND'S NAME
========================= */

// Change this to your friend's name
const friendName = "Beautiful";

document.getElementById("friendName").textContent = friendName;
document.getElementById("finalName").textContent = friendName;


/* =========================
   SCREEN NAVIGATION
========================= */

function showScreen(screenId) {

    // Hide all screens
    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    // Show selected screen
    const selectedScreen = document.getElementById(screenId);

    selectedScreen.classList.add("active");

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   NO BUTTON
========================= */

let noClicks = 0;

function noClicked() {

    const noMessage = document.getElementById("noMessage");
    const noButton = document.getElementById("noBtn");

    noClicks++;

    if (noClicks === 1) {

        noMessage.textContent =
            "Are you sure? 🥺";

        noButton.textContent =
            "Still NO 🙈";

    }

    else if (noClicks === 2) {

        noMessage.textContent =
            "Come onnn... there's something cute waiting! 💗";

        noButton.textContent =
            "Maybe... 👀";

    }

    else {

        noMessage.textContent =
            "I knew you'd say yes! 😂💗";

        noButton.textContent =
            "Okay okay! 💕";

        noButton.onclick = function () {
            showScreen("balloons");
        };

    }

}


/* =========================
   BALLOONS
========================= */

let poppedBalloons = 0;

const balloonMessages = [

    "You are so lovely. 💗",

    "You are so blessed. ✨",

    "You make ordinary days special. 🌸",

    "You deserve all the happiness in the world. 🥹💖"

];


function popBalloon(balloon, index) {

    // Prevent clicking same balloon twice
    if (balloon.classList.contains("pop")) {
        return;
    }

    // Add popping animation
    balloon.classList.add("pop");

    poppedBalloons++;

    // Show message
    const messageBox =
        document.getElementById("balloonMessage");

    const messageText =
        document.getElementById("messageText");

    messageText.textContent =
        balloonMessages[index];

    messageBox.classList.add("show");

    // Update counter
    document.getElementById("balloonCount").textContent =
        `${poppedBalloons} / 4 balloons popped`;

    // Small vibration on supported phones
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }

    // All balloons popped
    if (poppedBalloons === 4) {

        setTimeout(() => {

            document.getElementById("cakeButton")
                .classList.remove("hidden");

        }, 700);

    }

}


/* =========================
   BLOW CANDLE
========================= */

function blowCandle() {

    const flames = document.querySelectorAll(".flame");
    const blowButton = document.getElementById("blowButton");
    const wishText = document.getElementById("wishText");
    const memoryButton = document.getElementById("memoryButton");

    // Turn off all flames
    flames.forEach(flame => {
        flame.classList.add("off");
    });

    // Change message
    wishText.textContent =
        "Wish made! ✨ May all your little dreams come true. 💗";

    wishText.classList.add("wished");

    // Hide blow button
    blowButton.classList.add("hidden");

    // Show memories button
    setTimeout(() => {
        memoryButton.classList.remove("hidden");
    }, 700);

    // Confetti
    createConfetti();
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    const symbols = [
        "💗",
        "✨",
        "💕",
        "🌸",
        "🎉"
    ];

    for (let i = 0; i < 35; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.top =
            "-20px";

        confetti.style.animationDelay =
            Math.random() * 1 + "s";

        confetti.style.fontSize =
            (Math.random() * 10 + 10) + "px";

        container.appendChild(confetti);


        // Remove after animation
        setTimeout(() => {

            confetti.remove();

        }, 3500);

    }

}