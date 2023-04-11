// const storedEditor = localStorage.getItem("editor");

// if (storedEditor) {
//     editor.value = storedEditor;
// };

// document.getElementById("editor").addEventListener("change", () => {
// // document.getElementById("editor").addEventListener("blur", () => {
//     const editor = document.getElementById("editor");
//     localStorage.setItem("editor", editor.value);
// });

// const btnClear = document.querySelector(".btn_clear");

// btnClear.addEventListener("click", e => {
//     e.preventDefault();
//     editor.value = "";
//     // localStorage.setItem("editor", editor.value);
//     localStorage.removeItem("editor");
// });

// ------------------------------------------------------------------ value включено в editor
// const storedEditor = localStorage.getItem("editor");

// if (storedEditor) {
//     editor = storedEditor;
// };

// document.getElementById("editor").addEventListener("change", () => {
//     const editor = document.getElementById("editor").value;
//     localStorage.setItem("editor", editor);
// });

// const btnClear = document.querySelector(".btn_clear");

// btnClear.addEventListener("click", e => {
//     e.preventDefault();
//     editor.value = "";
//     // localStorage.setItem("editor", editor.value);
//     localStorage.removeItem("editor");
// });

// ------------------------------------------------------------------------------- c input
const storedEditor = localStorage.getItem("editor");

if (storedEditor) {
    editor.value = storedEditor;
};

const btnClear = document.querySelector(".btn_clear");

btnClear.addEventListener("click", e => {
    e.preventDefault();
    editor.value = "";
    localStorage.removeItem("editor");
});

// -------------------------------------------------------------------------------
document.getElementById("editor").addEventListener("input", e => {
    e.preventDefault();
    setTimeout( () => {
        const editor = document.getElementById("editor");
        localStorage.setItem("editor", editor.value);
    }, 1500 );
});

// -------------------------------------------------------------------------------
// const saveEditor = () => {
//     document.getElementById("editor").addEventListener("change", () => {
//         const editor = document.getElementById("editor");
//         localStorage.setItem("editor", editor.value);
//     });
// };

// function debounceDecorator(func) {
//     return function(...args) {
//         setTimeout( () => func(), 800 );
//     }
// }

// const debouncedSaveEditor = debounceDecorator(saveEditor);
// debouncedSaveEditor();