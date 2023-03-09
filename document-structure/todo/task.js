const taskInput = document.getElementById("task__input");
const btnAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

btnAdd.addEventListener("click", e => {
    e.preventDefault();
    if (!taskInput.value == " " && taskInput.value.length > 1) {
        
        //  добавление задачи ()
        tasksList.innerHTML += `                                 
            <div class="task">
                <div class="task__title">
                    ${taskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;

        // const arrElemRemove = tasksList.querySelectorAll(".task__remove");      //  удаление задачи ()
        // Array.from(arrElemRemove).forEach( element => {
        Array.from(tasksList.querySelectorAll(".task__remove")).forEach( element => {
            element.addEventListener("click", e => {
                e.preventDefault();
                element.closest(".task").remove();
            })
        });
        
        // --- решение: создание элемента ------------------------------------------------------------------------
        // const newTask = document.createElement("div");      //  добавление задачи (создание элемента)
        // newTask.classList = "task";
        // newTask.innerHTML = `
        //     <div class="task__title">
        //         ${taskInput.value}
        //     </div>
        //     <a href="#" class="task__remove">&times;</a>
        // `;
        // tasksList.append(newTask);

        // const elemRemove = newTask.querySelector(".task__remove");      //  удаление задачи (создание элемента)
        // elemRemove.addEventListener("click", e => {
        //     e.preventDefault();
        //     elemRemove.closest(".task").remove();
        // })
        //--------------------------------------------------------------------------------------------------------
    }
    
    taskInput.value = "";
})