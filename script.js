let nilai = 0;
let count = document.getElementById("count");
let merah = document.getElementById('left-red');
let biru = document.getElementById('right-blue');

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        nilai++;
        count.textContent = nilai;
    }

    if (e.key === "ArrowLeft") {
        nilai--;
        count.textContent = nilai;
    }

    ubahWarna();
    cekMenang();
    
});

function ubahWarna() {
    if (nilai < 0) {
        count.style.color = "red";
    }
    if (nilai > 0) {
        count.style.color = "blue";
    }
    if (nilai == 0) {
        count.style.color = "black";
    }
}

function cekMenang(){
    if (nilai == 10) {
        alert("Biru Menang!");
        nilai = 0;
    }
    if(nilai == -10) {
        alert("Merah Menang!");
        nilai = 0;
    }
}

