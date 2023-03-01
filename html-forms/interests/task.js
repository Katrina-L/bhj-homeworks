const interestMain = document.querySelector(".interests_main");

interestMain.addEventListener("change", e => {
    // const interest = e.target.closest(".interest");
    // const interestsActive = interest.querySelector(".interests_active");

    const interestsActive = e.target.closest(".interest").querySelector(".interests_active");

    if ( !e.target.closest(".interests_active") ) {
        const interestCheck = interestsActive.querySelectorAll(".interest__check");
        // console.log(interestCheck);

        for (const element of interestCheck) {
            // element.checked = true;
            element.checked = e.target.checked;
        }
    }
})