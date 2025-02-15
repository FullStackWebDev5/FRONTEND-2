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

/* EDIT TASK */
let currentEditingTaskIndex = null
function editTask(taskIndex) {
  currentEditingTaskIndex =  taskIndex

  let taskToEdit = tasks.find((task, index) => index == taskIndex)
  document.getElementById('new-task-input').value = taskToEdit
  document.getElementById('new-task-input').placeholder = `Editing: ${taskToEdit}`

  const newTaskBtn = document.getElementById('new-task-btn')
  const updateTaskBtn = document.getElementById('update-task-btn')
  newTaskBtn.style.display = 'none'
  updateTaskBtn.style.display = 'block'
}

function updateTask() {
  const updatedTask = document.getElementById('new-task-input').value
  if(!updatedTask) {
    invalidInputAlert()
    return
  }

  tasks[currentEditingTaskIndex] = updatedTask

  currentEditingTaskIndex = null
  document.getElementById('new-task-input').value = ''
  document.getElementById('new-task-input').placeholder = 'Enter a new task'

  const newTaskBtn = document.getElementById('new-task-btn')
  const updateTaskBtn = document.getElementById('update-task-btn')
  newTaskBtn.style.display = 'block'
  updateTaskBtn.style.display = 'none'

  clearTasks()
  displayTasks()
  updateTaskSuccessAlert()
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
    li.classList.add('list-group-item', 'list-group-item-light', 'd-flex', 'justify-content-between', 'align-items-center')

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

    const actionBtnDiv = document.createElement('div')

    const deleteBtn = document.createElement('button')
    deleteBtn.type = 'button'
    deleteBtn.classList.add('btn', 'btn-sm', 'btn-danger')
    deleteBtn.addEventListener('click', () => {
      deleteTask(taskIndex)
    })
    const deleteIcon = document.createElement('i')
    deleteIcon.classList.add('fa-solid', 'fa-trash')
    deleteBtn.append(deleteIcon)

    const editBtn = document.createElement('button')
    editBtn.type = 'button'
    editBtn.classList.add('btn', 'btn-sm', 'btn-warning', 'me-2')
    editBtn.addEventListener('click', () => {
      editTask(taskIndex)
    })
    const editIcon = document.createElement('i')
    editIcon.classList.add('fa-solid', 'fa-pen-to-square')
    editBtn.append(editIcon)

    actionBtnDiv.append(editBtn, deleteBtn)

    li.append(div, actionBtnDiv)
    parent.append(li)

    input.addEventListener('change', (event) => {
      const checkedBtn = document.createElement('button')
      checkedBtn.type = 'button'
      checkedBtn.disabled = true
      checkedBtn.classList.add('btn', 'btn-sm', 'btn-success', 'me-2', 'checked-btn')
      const checkedIcon = document.createElement('i')
      checkedIcon.classList.add('fa-regular', 'fa-circle-check')
      checkedBtn.append(checkedIcon)

      if(event.target.checked) {
        label.style.textDecoration = 'line-through'
        li.classList.remove('list-group-item-light')
        li.classList.add('list-group-item-success')
        actionBtnDiv.innerHTML = ''
        actionBtnDiv.append(checkedBtn)
      } else {
        label.style.textDecoration = 'none'
        li.classList.remove('list-group-item-success')
        li.classList.add('list-group-item-light')
        actionBtnDiv.innerHTML = ''
        actionBtnDiv.append(editBtn, deleteBtn)
      }
    })
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

function updateTaskSuccessAlert() {
  const div = document.createElement('div')
  div.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade','show')
  div.role = 'alert'

  const icon = document.createElement('i')
  icon.classList.add('fa-regular', 'fa-circle-check', 'pe-1')
  const span = document.createElement('span')
  span.innerText = 'Task edited successfully'
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