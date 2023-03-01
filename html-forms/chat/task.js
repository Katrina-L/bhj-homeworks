const messagesRobot = [
    "Обратитесь позже",
    "Нам не до Вас",
    "Для Вас все операторы заняты",
    "Ожидайте ответа когда-нибудь в следующей жизни",
    "Давайте как-нибудь сами решайте свои вопросы",
    "К счастью, Ваш вопрос не стоит нашего внимания",
];
const chatWidget = document.querySelector(".chat-widget")
const chatWidgetSide = document.querySelector(".chat-widget__side");
const chatWidgetInput = document.getElementById("chat-widget__input");
const messages = document.getElementById("chat-widget__messages");
const messagesContainer = document.querySelector(".chat-widget__messages-container");

chatWidgetSide.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");
    // if ( chatWidget.classList.contains("chat-widget_active") && !chatWidgetInput.addEventListener() ) {
    //     let timerIdQuestion = setTimeout( () => {
    //         messages.innerHTML += `
    //         <div class="message">
    //             <div class="message__time">${getCurrentTime()}</div>
    //             <div class="message__text">Чё нада?</div>
    //         </div>
    //         `;
    //         messages.scrollIntoView(false);
    //     }, 2000 );
    // }
});

chatWidgetInput.addEventListener("keydown", e => {
    if ( chatWidgetInput.value !== "" && e.code === "Enter" ) {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${getCurrentTime()}</div>
            <div class="message__text">${chatWidgetInput.value}</div>
        </div>`;
        messages.scrollIntoView(false);
        // lastMessageScroll("smooth");
        chatWidgetInput.value = "";
        
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${getCurrentTime()}</div>
            <div class="message__text">${answerRobot()}</div>
        </div>
        `;
        messages.scrollIntoView(false);
        // lastMessageScroll("smooth");
    }
})  

function getCurrentTime() {
    let date = new Date();
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let currentTime = `${hours}:${minutes}`;
    return currentTime;
}

function answerRobot() {
    let messagesRobotIndex = Math.floor(Math.random() * messagesRobot.length);
    return messagesRobot[messagesRobotIndex];
}

// function lastMessageScroll(b) {
//     var lastMessageVisible = document.getElementById("chat-widget__messages");
//     if (!lastMessageVisible) return;
//     lastMessageVisible.scrollIntoView({
//         behavior: b || "auto",
//         block: "end",
//     })
// }