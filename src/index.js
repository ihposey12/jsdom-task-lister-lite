const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const newTask = document.querySelector("#new-task-description").value
  // const taskItem = document.createElement("li")
  // taskItem.innerTEXT = newTask
  // taskList.appendChild(taskItem)
  taskList.innerHTML += `
      <li>${newTask}
        <button data-action="delete">delete</button>
      </li>
    `
  taskForm.reset()
})

taskList.addEventListener('click', function(e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})