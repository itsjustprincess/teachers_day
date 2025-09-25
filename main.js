
document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("audio");
  const playButton = document.getElementById("playButton");
  
  playButton.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      playButton.textContent = "Pause Audio";
    } else {
      audio.pause();
      playButton.textContent = "Play Audio";
    }
  });
});

