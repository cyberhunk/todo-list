function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value.trim();
        
        // Add a delete button for each task
        let deleteBtn = document.createElement("button");
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.marginLeft = "80%";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            if (confirm("Are you sure you want to delete this task?")) {
                taskList.removeChild(li);
            }
        };
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
