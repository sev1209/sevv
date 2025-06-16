document.addEventListener("DOMContentLoaded", () => {
  // Power button logic
  const powerButtons = document.querySelectorAll(".power-toggle");
  powerButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-target");
      const turntable = document.getElementById(targetId);
      const audio = document.getElementById("audio-" + targetId);

      const isPowerOn = turntable.classList.contains("power-on");

      if (isPowerOn) {
        turntable.classList.remove("power-on");
        turntable.classList.add("power-off");
        btn.textContent = "Power (OFF)";

        if (audio && !audio.paused) {
          audio.pause();
          audio.currentTime = 0;
        }
      } else {
        turntable.classList.remove("power-off");
        turntable.classList.add("power-on");
        btn.textContent = "Power (ON)";
      }
    });
  });

  // Start/Stop button logic
  const playButtons = document.querySelectorAll(".toggle-audio");
  playButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-target");
      const turntable = document.getElementById(targetId);
      const audio = document.getElementById("audio-" + targetId);

      if (!turntable.classList.contains("power-on")) {
        alert("Power is OFF. Please turn it ON first.");
        return;
      }

      if (audio.paused) {
        audio.play();
        btn.textContent = "Stop";
      } else {
        audio.pause();
        btn.textContent = "Start";
      }
    });
  });
});
