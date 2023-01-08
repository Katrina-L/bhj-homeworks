const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
console.log(rotatorCase);    //  удалить

function changeRotatorCaseActive(array, index, textActive) {
    array[index].classList.remove(textActive);
    if (index === array.length - 1) {
        index = -1;
    }
    array[index + 1].classList.add(textActive);
}

//  работает
setInterval( () => {
    const indexOfActive = rotatorCase.findIndex( element => element.classList.contains("rotator__case_active") );
    
    if (indexOfActive !== rotatorCase.length - 1) {
        changeRotatorCaseActive(rotatorCase, indexOfActive, "rotator__case_active");
    }
    if (indexOfActive === rotatorCase.length - 1) {
        changeRotatorCaseActive(rotatorCase, indexOfActive, "rotator__case_active");
    }
}, 1000 )

// //  работает
// setInterval( () => {
//     const indexOfActive = rotatorCase.findIndex( element => element.classList.contains("rotator__case_active") );
    
//     if (indexOfActive !== rotatorCase.length - 1) {
//         rotatorCase[indexOfActive].classList.remove("rotator__case_active");
//         rotatorCase[indexOfActive + 1].classList.add("rotator__case_active");
//     }
//     if (indexOfActive === rotatorCase.length - 1) {
//         rotatorCase[indexOfActive].classList.remove("rotator__case_active");
//         rotatorCase[0].classList.add("rotator__case_active");
//     }
// }, 1000 )

//  ---------------------------------------------------------------------------------------------------------------
//  не работает

// for (let i = 0; i < rotatorCase.length; i++) {
//     const speed = rotatorCase[i].getAttribute("data-speed");
//     const color = rotatorCase[i].getAttribute("data-color");
//     // rotatorCase[i].dataset.speed = speed;
//     rotatorCase[i].dataset.color = color;

//     intervalId = setInterval( () => {
//         const indexOfActive = rotatorCase.findIndex( element => element.classList.contains("rotator__case_active") );
        
//         if (indexOfActive !== rotatorCase.length - 1) {
//             rotatorCase[indexOfActive].classList.remove("rotator__case_active");
//             rotatorCase[indexOfActive + 1].classList.add("rotator__case_active");
            
//         }
//         if (indexOfActive === rotatorCase.length - 1) {
//             rotatorCase[indexOfActive].classList.remove("rotator__case_active");
//             rotatorCase[0].classList.add("rotator__case_active");
//         }
//     }, speed)

//     clearInterval(intervalId);
// }
//  ---------------------------------------------------------------------------------------------------------------