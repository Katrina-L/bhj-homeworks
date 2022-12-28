const modalMain = document.getElementById("modal_main");
const showSuccess = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");

showSuccess.addEventListener("click", e => {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
});

const modalClose = document.querySelectorAll(".modal__close_times");
modalClose.forEach( element => {
    element.addEventListener("click", e => {
        element.closest(".modal").classList.remove("modal_active");
    });
})

// for (let i = 0; i < modalClose.length; i ++) {
//     modalClose[i].addEventListener("click", e => {
//         modalClose[i].closest(".modal").classList.remove("modal_active");
//     });
// }