const popup = document.getElementById("subscribe-modal");
const closeBtn = document.querySelector(".modal__close");

if ( !findCookie("closedPopup") ) {
    popup.classList.add("modal_active");
}

closeBtn.addEventListener("click", () => {
    popup.classList.remove("modal_active");
    
    let date = new Date(Date.now() + 36e5);
    date = date.toUTCString();
    // document.cookie = "closedPopup=true; expires=" + date;
    document.cookie = "closedPopup=true; max-age=600";
});

function findCookie(name) {
    const pairs = document.cookie.split("; ");
    return pairs.some( pair => pair.startsWith(name + "=") );
}