// // Задача #1
// const timer = document.getElementById("timer");
// const countdown = setInterval( () => {
//     if (timer.textContent > 0) {
//       timer.textContent --;
//     } else {
//         alert("Вы победили в конкурсе!");
//         clearInterval(countdown);
//     }
// } , 1000);

// Задача #1*
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const timer = document.getElementById("timer");
const countdown = setInterval( () => {
    if (timer.textContent > 0) {
        timer.textContent --;
    } else if (minutes.textContent > 0) {
        minutes.textContent --;
        timer.textContent = 59;
        countdown();
    } else if (hours.textContent > 0) {
        hours.textContent --;
        minutes.textContent = 59;
        timer.textContent = 59;
        countdown();
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(countdown);
    }
}, 1000 );