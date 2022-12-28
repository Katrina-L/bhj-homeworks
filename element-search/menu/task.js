const menuLink = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLink.length; i++) {
    if ( menuLink[i].nextElementSibling && menuLink[i].nextElementSibling.classList.contains("menu_sub") ) {
        menuLink[i].addEventListener("click", event => {
            menuLink[i].nextElementSibling.classList.toggle("menu_active");
            event.preventDefault();
        });
    }
}   

// menuLink.forEach( element => {
//     if ( element.nextElementSibling && element.nextElementSibling.classList.contains("menu_sub") ) {
//         element.addEventListener("click", event => {
//             element.nextElementSibling.classList.toggle("menu_active");
//             event.preventDefault();
//         })
//     }
// })

// ------------------------------------------------------------------------------------
// const menuSub = document.querySelectorAll(".menu_sub");
// console.log(menuSub);

// for (let i = 0; i < menuSub.length; i++) {
//     menuSub[i].addEventListener("mouseout", event => {
//         let element = event.target.closest("menu_sub");
//         if (element) return;
//         if (menuSub[i].contains(element)) return;
//         menuSub[i].classList.remove("menu_active");
//     })
// }