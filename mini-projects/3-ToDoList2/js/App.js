import { btnAdd, input, listTasks } from "./dom.js";
import { addTask, renderInput, } from "./functions.js";

btnAdd.addEventListener("click", function (e) {
  const value = input.value.trim();
  addTask(value);
  renderInput(input);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value.trim();
    addTask(value, listTasks);
    renderInput(input);
  }
});

listTasks.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteTask")) {
    e.target.closest(".task").remove();
  }

  if (e.target.classList.contains("taskName")) {
    e.target.classList.toggle("completed");
  }
});


