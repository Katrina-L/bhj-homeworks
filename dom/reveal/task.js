reveal = Array.from(document.querySelectorAll(".reveal"));

function isVisible(reveal) {
    // const {innerHeight} = window;    //   зачем?
    const {top} = reveal.getBoundingClientRect();

    if ( top > 0 && top < innerHeight) {
        reveal.classList.add("reveal_active");
    } else reveal.classList.remove("reveal_active");
}

// function isVisible(element) {
//     const {top, bottom} = element.getBoundingClientRect();

//     if ( bottom > 0 && top < window.innerHeight ) {
//         element.classList.add("reveal_active");
//     } else element.classList.remove("reveal_active");
// }

reveal.forEach( element => {
    setInterval ( () => {6
        isVisible(element);
    } )
} );

// reveal.forEach( element => {
//     element.addEventListener("wheel", event => isVisible(element));
// } );