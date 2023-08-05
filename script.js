const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value;
    taskInput.value = "";

    if(taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button" onclick="removeTask(this)">Excluir</button>
            `;
        taskList.appendChild(li);
    }
}

function removeTask(deleteButton) {
    const li = deleteButton.parentElement;
    li.remove();
}