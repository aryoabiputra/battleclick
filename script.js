let nilai = 0;
const max = 11;
const count = document.getElementById("count");
const merah = document.getElementById("left-red");
const biru = document.getElementById("right-blue");
const punchSound = document.getElementById("punchSound");

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") nilai = Math.min(max, nilai + 1), punchSound.play();
  if (e.key === "ArrowLeft") nilai = Math.max(-max, nilai - 1), punchSound.play();
  count.textContent = nilai;
  updateVisuals();
  checkWin();
});

function updateVisuals() {
  const percent = (nilai + max) / (2 * max) * 100;
  merah.style.width = (100 - percent) + "%";
  biru.style.width = percent + "%";
  if (nilai > 0) count.style.color = "#00f";
  else if (nilai < 0) count.style.color = "#f00";
  else count.style.color = "#fff";
}

function checkWin(){
  if (nilai === max || nilai === -max) {
    alert(nilai === max ? "Biru Menang!" : "Merah Menang!");
    nilai = 0;
    count.textContent = nilai;
    updateVisuals();
  }
}
