function setActiveDots(arrayItems, arrayDots) {
    setOffActive(arrayDots, "slider__dot_active");   // arrayDots.forEach( item => item.classList.remove("slider__dot_active"));
    const arrItems = Array.from(arrayItems);
    const index = arrItems.findIndex( item => item.className.includes("slider__item_active"));
    arrayDots[index].classList.add("slider__dot_active");
}

function setOffActive(array, classText) {
    array.forEach( item => item.classList.remove(classText) );
}

const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const slideArrowNext = document.querySelector(".slider__arrow_next");
const sliderItem = document.querySelectorAll(".slider__item");
const sliderDots = document.querySelectorAll(".slider__dot");

setActiveDots(sliderItem, sliderDots);

sliderArrowPrev.addEventListener("click", e => {
    for (let i = 0; i < sliderItem.length; i++) {
        if (sliderItem[i].classList.contains("slider__item_active")) {
            sliderItem[i].classList.remove("slider__item_active");
            (i === 0) ? sliderItem[sliderItem.length - 1].classList.add("slider__item_active") : sliderItem[i - 1].classList.add("slider__item_active");
            break;
        }
    }
    setActiveDots(sliderItem, sliderDots);
})

slideArrowNext.addEventListener("click", e => {
    for (let i = sliderItem.length - 1; i > -1; i--) {
        if (sliderItem[i].classList.contains("slider__item_active")) {
            sliderItem[i].classList.remove("slider__item_active");
            (i === sliderItem.length - 1) ? (sliderItem[0].classList.add("slider__item_active")) : (sliderItem[i + 1].classList.add("slider__item_active"));
            break;
        }
    }
    setActiveDots(sliderItem, sliderDots);
})

//  -------------------------------------------------------------------------------


// for (let i = 0; i < sliderDots.length; i++) {
//     setOffActive(sliderDots, "slider__dot_active");   //   sliderDots.forEach( item => item.classList.remove("slider__dot_active") );
//     sliderDots[i].addEventListener("click", e => {
//         // setActiveItems(sliderItem, sliderDots);
//         sliderDots[i].classList.add("slider__dot_active");
//         sliderItem[i].classList.add("slider__item_active");
        
//     })
//     break;
// }

// sliderDots.forEach( item => item.addEventListener("click", e => setActiveItems(sliderItem, sliderDots)));

// function setActiveItems(arrayItems, arrayDots) {
//     // setOfActive(arrayDots, "slider__dot_active");
//     const arrDots = Array.from(arrayDots);
//     const index = arrDots.findIndex( item => item.className.includes("slider__dot_active"));
//     arrayItems[index].classList.add("slider__item_active");
// }