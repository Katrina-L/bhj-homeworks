const dropdown = document.querySelector(".dropdown");
const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));

dropdown.addEventListener("click", e => dropdownList.classList.toggle("dropdown__list_active"));    //  открыть/закрыть меню

dropdownItem.forEach( item => item.addEventListener("click", e => {
    dropdownValue.textContent = item.textContent;
    dropdownList.classList.toggle(".dropdown__list_active");
    e.preventDefault();
}))