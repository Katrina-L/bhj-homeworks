// // Задача #2
// const clickerCounter = document.getElementById("clicker__counter");
// const cookie = document.getElementById("cookie");

// function counter() {
//     clickerCounter.textContent ++;
//     cookie.width = 300;
//     setTimeout( () => cookie.width = 200, 50 );
// }

// cookie.onclick = counter;

// Задача #2*
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
const cookie = document.getElementById("cookie");
let start = Date.now();

function counter() {
    
    clickerCounter.textContent ++;
    cookie.width = 300;
    endClick = Date.now();
    clickerSpeed.textContent = +(1 / (endClick - start) * 1000).toFixed(3);
    start = endClick;
    setTimeout( () => cookie.width = 200, 50 );
}

cookie.onclick = counter;