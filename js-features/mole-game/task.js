// Задача #3
function getNull() {
    dead.textContent = 0;
    lost.textContent = 0;
}

function check() {
    if (this.className.includes("hole_has-mole")) {
        dead.textContent ++;
    } else lost.textContent ++;
    if (dead.textContent == 10) {
        alert("Вы победили! Поздравляем!");
        getNull();
        return;
    } 
    if (lost.textContent == 5) {
        alert("Вы проиграли!");
        getNull();
        return;
    }
}

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

getNull();

for (let i = 1; i < 10; i++) {
    getHole = (i) => document.getElementById(`hole${i}`);
    getHole(i).onclick = check;
}