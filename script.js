let input = document.getElementById("input");
let addBtn = document.getElementById("addbutn");

let list = document.createElement("div");
document.getElementById("maindiv").appendChild(list);

function addtsk() {
  let taskText = input.value.trim();
  if (taskText === "") {
    alert("Enter any task");
    return;
  }

  let task = document.createElement("div");
  task.className = "task";

  let span = document.createElement("span");
  span.className = "spaan";
  span.textContent = taskText;

  let editBtn = document.createElement("button");
  editBtn.className = "edit_btn";
  editBtn.textContent = "Edit";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "dlt_btn";
  deleteBtn.textContent = "Delete";

  editBtn.onclick = function () {
    if (editBtn.textContent === "Edit") {
      let editInput = document.createElement("input");
      editInput.value = span.textContent;
      editInput.style.padding = "8px";
      editInput.style.borderRadius = "8px";
      task.replaceChild(editInput, span);
      editBtn.textContent = "Save";
    } else {
      let newText = task.querySelector("input").value.trim();
      if (newText === "") {
        alert("Enter any task");
        return;
      }
      span.textContent = newText;
      task.replaceChild(span, task.querySelector("input"));
      editBtn.textContent = "Edit";
    }
  };

  deleteBtn.onclick = function () {
    task.remove();
  };

  task.append(span, editBtn, deleteBtn);
  list.appendChild(task);
  input.value = "";
}

addBtn.onclick = addtsk;

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addtsk();
});
