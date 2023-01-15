// const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));

// function changeRotatorCaseActive(array, index, textActive) {
//     array[index].classList.remove(textActive);
//     if (index === array.length - 1) {
//         index = -1;
//     }
//     array[index + 1].classList.add(textActive);
// }

// setInterval( () => {
//     const indexOfActive = rotatorCase.findIndex( element => element.classList.contains("rotator__case_active") );
//     changeRotatorCaseActive(rotatorCase, indexOfActive, "rotator__case_active");
// }, 1000 )

//  ---------------------------------------------------------------------------------------------------------------

const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let speed = rotatorCase[rotatorCase.findIndex( element => element.classList.contains("rotator__case_active") )].getAttribute("data-speed");
let color = rotatorCase[rotatorCase.findIndex( element => element.classList.contains("rotator__case_active") )].getAttribute("data-color");
rotatorCase[rotatorCase.findIndex( element => element.classList.contains("rotator__case_active") )].style.color = color;
// rotatorCase[indexOfActive].style.color = color; //  indexOfActive is not defined

let changeRotatorCaseActive = function (array, index) {
    array[index].classList.remove("rotator__case_active");
    if (index === array.length - 1) {
        index = -1;
    }
    array[index + 1].classList.add("rotator__case_active");
    indexOfActive = index + 1;
    speed = rotatorCase[indexOfActive].getAttribute("data-speed");
    color = rotatorCase[indexOfActive].getAttribute("data-color");
    rotatorCase[indexOfActive].style.color = color;
    timerID = setTimeout(changeRotatorCaseActive, speed, rotatorCase, indexOfActive);
}

timerID = setTimeout( () => {
    let indexOfActive = rotatorCase.findIndex( element => element.classList.contains("rotator__case_active") );
    changeRotatorCaseActive(rotatorCase, indexOfActive);
}, speed);

//  ---------------------------------------------------------------------------------------------------------------

// //  работает
// setInterval( () => {
//     const indexOfActive = rotatorCase.findIndex( element => element.classList.contains("rotator__case_active") );
    
//     if (indexOfActive !== rotatorCase.length - 1) {
//         changeRotatorCaseActive(rotatorCase, indexOfActive, "rotator__case_active");
//     }
//     if (indexOfActive === rotatorCase.length - 1) {
//         changeRotatorCaseActive(rotatorCase, indexOfActive, "rotator__case_active");
//     }
// }, 1000 )

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