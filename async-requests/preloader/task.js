const loader = document.getElementById("loader");
const items = document.getElementById("items");

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
    if ( xhr.readyState === xhr.DONE ) {
        loader.classList.remove("loader_active");
    }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener("load", () => {
    for (let item of Object.values(xhr.response.response.Valute))  {
        items.insertAdjacentHTML("beforeend", 
            `<div class="item">
                <div class="item__code">
                    ${item.CharCode}
                </div>
                <div class="item__value">
                    ${item.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`);
    }
});