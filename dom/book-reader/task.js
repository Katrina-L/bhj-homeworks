function compareIndex(index) {
    const indexOfSize = fontSize.findIndex( size => size.classList.contains("font-size_active") );
    fontSize[indexOfSize].classList.remove("font-size_active");
    fontSize[index].classList.add("font-size_active");

    if (index === 0) {
        book.classList.remove("book_fs-big");
        book.classList.add("book_fs-small");
        return;
    }

    if (index === 1) {
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
        return;
    }

    if (index === 2) {
        book.classList.remove("book_fs-small");
        book.classList.add("book_fs-big");
        return;
    }
}

const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

// fontSize.forEach( (size, index) => size.addEventListener("click", event => {
//     compareIndex(index);
// } ));

fontSize.some( (size, index) => size.addEventListener("click", event => {
    compareIndex(index);
} ));