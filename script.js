
document.getElementById("add-task-btn").addEventListener("click", function()
{
    const data = (document.getElementById("task-input").value).trim();

    //Checks whether data is empty
    if (data !== "") {

        // creating an list element with data as its value

        const task = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.addEventListener("change", function() {
            task.classList.toggle('completed');
        });
        const taskText = document.createTextNode(data);

        const deleteBtn = document.createElement("button");
        deleteBtn.type = 'button';
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function() {
            deleteBtn.parentElement.remove();
        })


        task.appendChild(taskText);
        task.appendChild(checkbox);
        task.appendChild(deleteBtn);

        const taskList = document.getElementById("task-list");
        taskList.append(task);
        document.getElementById("task-input").value = "";
    }
    else {
        alert("Please enter a task");
    }
});