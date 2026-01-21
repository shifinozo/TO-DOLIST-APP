let input = document.getElementById("input")
let list = document.createElement("div")
document.getElementById("maindiv").appendChild(list)
// let msg =document.createElement(span)
// msg.className="spn";

function addtsk() {
    let taskText = input.value.trim()
    let task = document.createElement("div")
    task.className = "task"
    let span = document.createElement("span")
    span.textContent = taskText
    span.className="spaan"
    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit";
    editBtn.className = "edit_btn";
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.className = "dlt_btn"
    if (taskText === "") {
        alert("Enter any task")
        return;
    }
    //edit btn..........................
    editBtn.onclick = function () {
        if (editBtn.textContent === "Edit") {
            let editInput = document.createElement("input")
            editInput.type = "text";
            editInput.value = span.textContent
            task.replaceChild(editInput, span)
            editBtn.textContent = "Save"
        } else {
            let newspan = document.createElement("span")
            newspan.textContent = task.querySelector("input").value.trim();
            if (newspan.textContent === "") {
                alert("Enter any task")
                
            }
            newspan.className="spaan"
            task.replaceChild(newspan, task.querySelector("input"))
            span = newspan
            editBtn.textContent = "Edit"
        }
    }
    //  delete btn ..,..............
    deleteBtn.onclick = function () {
        task.remove()
    }
    list.appendChild(task);
    task.appendChild(span);
    task.appendChild(editBtn);
    task.appendChild(deleteBtn);
    input.value = "";
    // msg.textContent="task added"
    // document.getElementById("maindiv").appendChild(msg)
}
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addtsk();
    }
});