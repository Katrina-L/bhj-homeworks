reveal = Array.from(document.querySelectorAll(".reveal"));

function isVisible(element) {
    const {top, bottom} = element.getBoundingClientRect();

    if ( bottom > 0 && top < window.innerHeight ) {
        element.classList.add("reveal_active");
    } else element.classList.remove("reveal_active");
}

reveal.forEach( element => {
    setInterval ( () => {
        isVisible(element);
    } )
} );

// reveal.forEach( element => {
//     element.addEventListener("wheel", event => isVisible(element));
// } );