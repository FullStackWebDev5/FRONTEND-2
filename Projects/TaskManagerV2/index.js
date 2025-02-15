let tasks = []

/* DISPLAY INITIAL DATA */
displayTasks()

/* ADD TASK */
function addTask() {
  const newTask = document.getElementById('new-task-input').value
  if(!newTask) {
    invalidInputAlert()
    return
  }

  tasks.push(newTask)
  clearTasks()
  displayTasks()

  addTaskSuccessAlert()
  document.getElementById('new-task-input').value = ''
}

/* DELETE TASK */
function deleteTask(taskIndex) {
  tasks = tasks.filter((task, index) => index != taskIndex)

  clearTasks()
  displayTasks()

  deleteTaskSuccessAlert()
}

/* DISPLAY TASKS */
function displayTasks() {
  const parent = document.getElementById('task-list')

  tasks.forEach((task, taskIndex) => {
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')

    const div = document.createElement('div')
    const input = document.createElement('input')
    input.classList.add('form-check-input', 'me-2')
    input.type = 'checkbox'
    input.id = 'firstCheckbox'
    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.for = 'firstCheckbox'
    label.innerText = task

    div.append(input, label)

    const button = document.createElement('button')
    button.type = 'button'
    button.classList.add('btn', 'btn-sm', 'btn-danger')
    button.addEventListener('click', () => {
      deleteTask(taskIndex)
    })
    const icon = document.createElement('i')
    icon.classList.add('fa-solid', 'fa-trash')

    button.append(icon)

    li.append(div, button)
    parent.append(li)
  })
}

/* CLEAR TASKS */
function clearTasks() {
  const parent = document.getElementById('task-list')
  parent.innerHTML = ''
}

/* ALERTS */
const alertContainer = document.getElementById('alert-container')

function invalidInputAlert() {
  const div = document.createElement('div')
  div.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade','show')
  div.role = 'alert'

  const icon = document.createElement('i')
  icon.classList.add('fa-solid', 'fa-triangle-exclamation', 'me-1')
  const span = document.createElement('span')
  span.innerText = 'Please enter a valid task'
  const button = document.createElement('button')
  button.type = 'button'
  button.classList.add('btn-close')
  button.addEventListener('click', () => {
    div.remove()
  })

  div.append(icon, span, button)
  alertContainer.append(div)

  setTimeout(() => {
    div.remove()
  }, 5000)
}

function addTaskSuccessAlert() {
  const div = document.createElement('div')
  div.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade','show')
  div.role = 'alert'

  const icon = document.createElement('i')
  icon.classList.add('fa-regular', 'fa-circle-check', 'pe-1')
  const span = document.createElement('span')
  span.innerText = 'New task added successfully'
  const button = document.createElement('button')
  button.type = 'button'
  button.classList.add('btn-close')
  button.addEventListener('click', () => {
    div.remove()
  })

  div.append(icon, span, button)
  alertContainer.append(div)

  setTimeout(() => {
    div.remove()
  }, 5000)
}

function deleteTaskSuccessAlert() {
  const div = document.createElement('div')
  div.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade','show')
  div.role = 'alert'

  const icon = document.createElement('i')
  icon.classList.add('fa-regular', 'fa-circle-xmark', 'pe-1')
  const span = document.createElement('span')
  span.innerText = 'Task deleted successfully'
  const button = document.createElement('button')
  button.type = 'button'
  button.classList.add('btn-close')
  button.addEventListener('click', () => {
    div.remove()
  })

  div.append(icon, span, button)
  alertContainer.append(div)

  setTimeout(() => {
    div.remove()
  }, 5000)
}