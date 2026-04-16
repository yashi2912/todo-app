function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="done-btn" onclick="markDone(this)">✔</button>
            <button class="delete-btn" onclick="deleteTask(this)">✖</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}

function markDone(btn) {
    btn.parentElement.parentElement.classList.toggle("completed");
}