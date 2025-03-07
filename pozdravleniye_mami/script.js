
let music = document.getElementById("retro-music");
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
