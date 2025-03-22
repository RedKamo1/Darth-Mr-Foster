// JavaScript to control background music
const audio = document.getElementById("starWarsMusic");

// Toggle music on/off with Spacebar
document.body.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});

// Optional: Create an alert when the user clicks the French Mastery button
function initiateFrenchMastery() {
    alert("May the Force guide your studies!");
}
