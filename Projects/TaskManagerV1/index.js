let tasks = []

/* ADD TASK */
function addTask() {
  const newTask = prompt('Enter a new task')

  if(!newTask) {
    document.getElementById('alert').innerHTML = 
    `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <i class="fa-solid fa-triangle-exclamation me-1"></i>
        Please enter a valid task
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `
    return
  }

  let noOfTasks = tasks.push(newTask)
  
  document.getElementById('task-list').innerHTML +=
  `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label" for="firstCheckbox">
          ${newTask}
        </label>
      </div>
      <button type="button" class="btn btn-sm btn-danger" onclick="deleteTask(${noOfTasks-1})">
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
  `

  document.getElementById('alert').innerHTML = 
  `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <i class="fa-regular fa-circle-check pe-1"></i>
      New task added successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `
}

/* DELETE TASK */
function deleteTask(index) {
  let updatedTasks = []
  for(let i = 0; i < tasks.length; i++) {
    if(i != index) {
      updatedTasks.push(tasks[i])
    }
  }
  tasks = updatedTasks

  document.getElementById('task-list').innerHTML = ''
  displayTasks(tasks)

  document.getElementById('alert').innerHTML = 
  `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <i class="fa-regular fa-circle-xmark pe-1"></i>
      Task deleted successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `
}

/* DELETE TASKS */
function displayTasks(tasks) {
  for(let i = 0; i < tasks.length; i++) {
    document.getElementById('task-list').innerHTML +=
    `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
          <label class="form-check-label" for="firstCheckbox">
            ${tasks[i]}
          </label>
        </div>
        <button type="button" class="btn btn-sm btn-danger" onclick="deleteTask(${i})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </li>
    `
  }
}