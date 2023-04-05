const storedUserId = localStorage.getItem("userId");

if ( storedUserId ) {
    document.getElementById("user_id").textContent = storedUserId;
    // document.getElementById("signin").classList.remove("signin_active");
    // document.getElementById("welcome").classList.add("welcome_active");
    changePage("signin", "welcome");
    createBtn("Выйти");
}

document.getElementById("signin__form").addEventListener("submit", e => {
    e.preventDefault();
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("loadend", () => {
        if ( xhr.response.success === true ) {
            localStorage.setItem("userId", xhr.response.user_id);

            let userId = document.getElementById("user_id");
            userId.textContent = xhr.response.user_id;
            
            // document.getElementById("signin").classList.remove("signin_active");
            // document.getElementById("welcome").classList.add("welcome_active");
            changePage("signin", "welcome");
            createBtn("Выйти");
        } else {
            document.querySelectorAll(".control").forEach( elem => elem.value = "" );
            alert("Неверный логин/пароль");
        }
    });
    
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    
    const formData = new FormData(document.getElementById("signin__form"));
    xhr.send(formData);
});

function createBtn(value) {
    const singoutBtn = document.createElement("button");
    singoutBtn.className = "btn";
    singoutBtn.textContent = value;   // "Выйти"
    document.getElementById("welcome").after(singoutBtn);

    singoutBtn.addEventListener("click", e => {
        e.preventDefault();
        localStorage.clear();
        document.querySelectorAll(".control").forEach( elem => elem.value = "" );
        changePage("welcome", "signin");
        // document.getElementById("welcome").classList.remove("welcome_active");
        // document.getElementById("signin").classList.add("signin_active");
        singoutBtn.remove();
    })
}

function changePage(removedElem, addedElem) {
    document.getElementById(`${removedElem}`).classList.remove(`${removedElem}_active`);
    document.getElementById(`${addedElem}`).classList.add(`${addedElem}_active`);
}