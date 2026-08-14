function showQuestion() {

    document.getElementById("welcome-screen").classList.add("hidden");

    document.getElementById("question-screen").classList.remove("hidden");

}
function sayYes() {

    alert("Yay! ❤️");

}


function sayMaybe() {

    document
        .getElementById("question-screen")
        .querySelector("p")
        .textContent = "Hmm... I'll give you another chance 😏";

}


function sayNo() {

    document
        .getElementById("question-screen")
        .querySelector("p")
        .textContent = "No worries 🙂 I appreciate the honesty.";

}
function moveNoButton() {

    const noButton = document.getElementById("no-button");

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;


    const messages = [
        "No 🙂",
        "Nice try 😏",
        "Too slow 😂",
        "Are you sure? 👀",
        "Try again 😌",
        "Almost! 😂"
    ];


    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];


    noButton.textContent = randomMessage;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

}