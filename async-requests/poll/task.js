const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();

//-----------------------с помощью insertAdjacentHTML--------------------------
xhr.addEventListener("load", () => {
    pollTitle.innerHTML = `${xhr.response.data.title}`;
    for (let btn of xhr.response.data.answers) {
        pollAnswers.insertAdjacentHTML("beforeend", `
            <button class="poll__answer">
                ${btn}
            </button>
        `); 
    };
    
    const buttons = pollAnswers.querySelectorAll(".poll__answer");
    buttons.forEach( btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            alert("Спасибо, ваш голос засчитан!");
        });
    });
});

//-----------------------создание элемента-------------------------------------
// xhr.addEventListener("load", () => {
//     pollTitle.innerHTML = `${xhr.response.data.title}`;
//     for (let btn of xhr.response.data.answers) {
//         const newBtn = document.createElement("button");
//         pollAnswers.append(newBtn);
//         newBtn.innerHTML = `
//             <button class="poll__answer">
//                 ${btn}
//             </button>
//         `;

//         newBtn.addEventListener("click", e => {
//             e.preventDefault();
//             alert("Спасибо, ваш голос засчитан!");
//         });
//     }
// });
//----------------------------------------------------------------------------