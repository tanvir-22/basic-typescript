(function () {
    'use strict';

    const tasks = []; //empty array of object
    let lastid = 0;
    function getNextId() {
        return lastid++;
    }
    function createTask() {
        const samples = [
            { title: "refuel the bike", completed: false },
            { title: "go to school", completed: false },
            { title: "do the homework", completed: false },
            { title: "play rdr2", completed: false },
        ];
        samples.forEach((taskitem) => {
            tasks.push({
                id: lastid++,
                title: taskitem.title,
                completed: taskitem.completed,
            });
        });
    }

    const list = document.getElementById("taskList");
    const button = document.getElementById("addBtn");
    const input = document.getElementById("taskInput");
    function rendertask() {
        list.innerHTML = "";
        tasks.forEach((task) => {
            const li = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.addEventListener("change", () => {
                task.completed = checkbox.checked;
            });
            const span = document.createElement("span");
            span.textContent = task.title;
            li.append(checkbox, span);
            list.append(li);
        });
    }
    // deleteTask();//treeshaking 
    createTask();
    rendertask();
    button.addEventListener("click", () => {
        tasks.push({ id: getNextId(), title: input.value, completed: false });
        rendertask();
    });

})();
