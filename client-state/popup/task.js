const popup = document.getElementById("subscribe-modal");
const closeBtn = document.querySelector(".modal__close");

if (!document.cookie) {
    popup.classList.add("modal_active");
};

closeBtn.addEventListener("click", () => {
    popup.classList.remove("modal_active");
    document.cookie = "closedPopup=true; expires=" + date;
    // document.cookie = "closedPopup=true; max-age=3600";
});

let date = new Date(Date.now() + 36e5);
date = date.toUTCString();