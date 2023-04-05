const storedEditor = localStorage.getItem("editor");

if (storedEditor) {
    editor.value = storedEditor;
};

document.getElementById("editor").addEventListener("blur", () => {
    const editor = document.getElementById("editor");
    localStorage.setItem("editor", editor.value);
});

const btnClear = document.querySelector(".btn_clear");

btnClear.addEventListener("click", e => {
    e.preventDefault();
    editor.value = "";
    // localStorage.setItem("editor", editor.value);
    localStorage.removeItem("editor");
})

// ------------------------------------------------------------------
// const storedEditor = localStorage.getItem("editor");

// if (storedEditor) {
//     editor = storedEditor;
// };

// document.getElementById("editor").addEventListener("blur", () => {
//     const editor = document.getElementById("editor").value;
//     localStorage.setItem("editor", editor);
// });