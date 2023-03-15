const taskInput = document.getElementById("task__input");
const btnAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

btnAdd.addEventListener("click", e => {
    e.preventDefault();
    
    if (taskInput.value.trim()) {

        // --- решение: insertAdjacentHTML------------------------------------------------------------------------
        // const tasksList = document.getElementById("tasks__list");
        
        // tasksList.insertAdjacentHTML("beforeEnd", 
        //     `<div class="task">
        //         <div class="task__title">
        //             ${taskInput.value}
        //         </div>
        //         <a href="#" class="task__remove">&times;</a>
        //     </div>`
        // );

        // const elemRemove = tasksList.lastChild.querySelector(".task__remove");
        // elemRemove.addEventListener("click", e => {
        //     e.preventDefault();
        //     e.target.closest(".task").remove();
        // })
        //--------------------------------------------------------------------------------------------------------
        
        // --- решение: создание элемента ------------------------------------------------------------------------
        const newTask = document.createElement("div");      //  добавление задачи (создание элемента)
        newTask.className = "task";
        newTask.innerHTML = `
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `;
        tasksList.append(newTask);

        // newTask.outerHTML = `
        //     <div class="task">
        //         <div class="task__title">
        //             ${taskInput.value}
        //         </div>
        //         <a href="#" class="task__remove">&times;</a>
        //     </div>`;

        const elemRemove = newTask.querySelector(".task__remove");      //  удаление задачи (создание элемента)
        elemRemove.addEventListener("click", e => {
            e.preventDefault();
            elemRemove.closest(".task").remove();
        })
        //--------------------------------------------------------------------------------------------------------
    }
    
    taskInput.value = "";
})