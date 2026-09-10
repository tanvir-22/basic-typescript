import { tasks, createTask, getNextId } from "./seed";

const list = document.getElementById("taskList") as HTMLUListElement;
const button = document.getElementById("addBtn") as HTMLButtonElement;
const input = document.getElementById("taskInput") as HTMLButtonElement;
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

function deleteTask(): void {
  console.log("i will implement later");
}

