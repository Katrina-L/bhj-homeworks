const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach( elem => {
    elem.addEventListener("click", e => {
        e.preventDefault();

        // const title = elem.getAttribute("title");   //  прочитать атрибут title

        if (document.querySelector(".tooltip_active")) {           //  != null
            document.querySelector(".tooltip_active").remove();
        }

        const tooltip = document.createElement('div');
        tooltip.classList = "tooltip";
        tooltip.innerText = `${elem.getAttribute("title")}`;
        
        elem.after(tooltip);    //  вставить tooltip в разметку
        // elem.insertAdjacentElement("afterEnd", tooltip);    //  вставить tooltip в разметку

        const {left, top} = elem.getBoundingClientRect();

        tooltip.style.left = left + "px";
        tooltip.style.top = top + 20 + "px";
        
        tooltip.classList.add("tooltip_active");   //  добавить подсказке класс "tooltip_active"
    })
})