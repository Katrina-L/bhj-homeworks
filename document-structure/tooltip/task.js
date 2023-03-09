const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach( elem => {
    elem.addEventListener("click", e => {
        e.preventDefault();

        const title = elem.getAttribute("title");   //  прочитать атрибут title
        elem.setAttribute("position", "relative");

        if (document.querySelector(".tooltip_active") != null) {
            document.querySelector(".tooltip_active").remove();
        }

        const tooltip = document.createElement('div');
        tooltip.classList = "tooltip";
        tooltip.innerText = `${title}`;
        // tooltip.getAttribute("position");
        // tooltip.setAttribute("position", "absolute");

        elem.append(tooltip);    //  вставить tooltip в разметку
        // elem.insertAdjacentElement("afterEnd", tooltip);    //  вставить tooltip в разметку
        
        tooltip.style.left = tooltip.parentElement.offsetLeft + document.body.scrollLeft + "px";
        tooltip.style.top = tooltip.parentElement.offsetTop + document.body.scrollTop + "px";
        // tooltip.dataset.position = "right: 100px; top: 10px";
        // tooltip.style.position = tooltip.dataset.position;
        
        tooltip.classList.add("tooltip_active");   //  добавить подсказке класс "tooltip_active"
    })
})