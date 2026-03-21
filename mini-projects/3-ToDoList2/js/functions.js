function addTask(task, container) {
  // Check Task
  if (task === "") {
    alert("Please Enter Task");
    return;
  }
  // Create Elements
  let myElement = document.createElement("div");
  let mySpan = document.createElement("span");
  let myButton = document.createElement("button");

  // Set Properties
  myElement.setAttribute("class", "task");
  myButton.setAttribute("class", "deleteTask");
  mySpan.className = "taskName";

  // Set Text
  mySpan.textContent = task;
  myButton.textContent = "X";

  // Append Elements
  myElement.append(mySpan);
  myElement.append(myButton);
  container.append(myElement);
}

function renderInput(inputEl) {
  inputEl.value = "";
  inputEl.focus();
}

export { addTask, renderInput }
