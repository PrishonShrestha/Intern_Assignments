const taskTextfield = document.getElementById("task-textfield");
const dateField = document.getElementById("date-field");
const addButton = document.getElementById("add-button");

const taskList = document.getElementById("task-list");

// function to add new task
addButton.addEventListener("click", () => {
  const task = taskTextfield.value; // Get the value
  const date = dateField.value;
  if (task === "") {
    alert("You cannot add empty task");
    return;
  }
  if (date === "") {
    alert("Please assign date");
    return;
  }

  // Add items inside a task-list
  const list = document.createElement("li");
  list.className = "task-item add-animation";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "check-boc";

  const taskParagraph = document.createElement("p");
  taskParagraph.className = "task-paragraph";
  taskParagraph.textContent = taskTextfield.value;

  const taskDate = document.createElement("span");
  taskDate.className = "task-date";
  taskDate.textContent = date;

  const editButton = document.createElement("button");
  editButton.className = "edit-button";
  editButton.innerHTML = "&#9998;";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerHTML = "&#128465;";

  list.appendChild(checkbox);
  taskParagraph.appendChild(taskDate);
  list.appendChild(taskParagraph);
  list.appendChild(editButton);
  list.appendChild(deleteButton);
  taskList.prepend(list);

  // Remove add animation after it ends
  list.addEventListener(
    "animationend",
    () => {
      list.classList.remove("add-animation");
    },
    { once: true }
  );

  saveData();

  taskTextfield.value = "";
  dateField.value = "";
});

taskList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  const paragraph = li.querySelector("p");

  if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
    li.querySelector("p").classList.toggle("checked");
    saveData();
  } else if (
    e.target.tagName === "BUTTON" &&
    e.target.classList.contains("edit-button")
  ) {
    const newTask = prompt("Edit task");

    (paragraph.firstChild && paragraph.firstChild.nodeType === Node.TEXT_NODE
      ? paragraph.firstChild
      : paragraph.insertBefore(document.createTextNode(""), dateSpan)
    ).textContent = newTask + " ";
    // if (newTask.trim() !== "") {
    //   li.querySelector("p").textContent = newTask;

    //   const dateSpan = li.querySelector(".task-date");
    //   if (dateSpan) li.querySelector("p").appendChild(dateSpan);
    // }
    saveData();
  } else if (
    e.target.tagName === "BUTTON" &&
    e.target.classList.contains("delete-button")
  ) {
    li.classList.add("remove-animation");
    li.addEventListener(
      "animationend",
      () => {
        li.remove();
      },
      { once: true }
    );

    saveData();
  }
});

const clearList = () => {
  localStorage.clear();
  saveData();
};

const saveData = () => {
  localStorage.setItem("data", taskList.innerHTML);
};

const loadData = () => {
  taskList.innerHTML = localStorage.getItem("data");
};

loadData();
