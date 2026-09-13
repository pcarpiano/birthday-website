const hearts = document.getElementById("hearts");
const music = document.getElementById("music");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 35) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}


// Create hearts constantly
setInterval(createHeart, 180);


// Start the surprise
document.getElementById("startScreen").addEventListener("click", function() {

    document.getElementById("startScreen")
        .classList.add("hidden");

    document.getElementById("mainScreen")
        .classList.remove("hidden");

    music.play().catch(() => {});

});


// Show final message
function showMessage() {

    document.getElementById("mainScreen")
        .classList.add("hidden");

    document.getElementById("finalScreen")
        .classList.remove("hidden");

}