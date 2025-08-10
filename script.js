let nilai = 0;
const max = 11;
const count = document.getElementById("count");
const merah = document.getElementById("left-red");
const biru = document.getElementById("right-blue");
const punchSound = document.getElementById("punchSound");

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") {
    nilai = Math.min(max, nilai + 1);
    punch();
  }
  if (e.key === "ArrowLeft") {
    nilai = Math.max(-max, nilai - 1);
    punch();
  }
  updateVisuals();
  checkWin();
});

function punch() {
  punchSound.currentTime = 0;
  punchSound.play();

  gsap.fromTo(count, { scale: 1.2 }, { scale: 1, duration: 0.2, ease: "bounce" });
}

function updateVisuals() {
  const percent = (nilai + max) / (2 * max) * 100;
  merah.style.width = (100 - percent) + "%";
  biru.style.width = percent + "%";

  if (nilai > 0) count.style.color = "#5fafff";
  else if (nilai < 0) count.style.color = "#ff5f5f";
  else count.style.color = "#fff";

  count.textContent = nilai;
}

function checkWin() {
  if (nilai === max || nilai === -max) {
    alert(nilai === max ? "💙 Biru Menang!" : "❤️ Merah Menang!");
    nilai = 0;
    updateVisuals();
  }
}

// Partikel Latar
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 50 },
    "color": { "value": ["#ff5f5f", "#5fafff", "#ffffff"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.6, "random": true },
    "size": { "value": 4, "random": true },
    "line_linked": { "enable": false },
    "move": { "enable": true, "speed": 1.5 }
  }
});

// Set awal
updateVisuals();
