const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContents = Array.from(document.querySelectorAll(".tab__content"));

function changeTab(index) {
    const indexOfActive = tabs.findIndex( tab => tab.classList.contains("tab_active") );

    tabs[indexOfActive].classList.remove("tab_active");
    tabsContents[indexOfActive].classList.remove("tab__content_active");

    tabs[index].classList.add("tab_active");
    tabsContents[index].classList.add("tab__content_active");
}

tabs.forEach( (tab, index) => tab.addEventListener("click", event => {
    changeTab(index);
    tab.classList.add("tab_active");
}) );