const password = prompt('Create a new password')
console.log(password)

if (!password) {
  document.getElementById('alert').innerHTML = `
    <div class="alert alert-danger mt-5" role="alert">
      You have entered an invalid password
    </div>
  `
}

/*
  # Password strength checks
    1. Contains at least 8 characters
    2. Contains atleast one lowercase character
    3. Contains atleast one uppercase character
    4. Contains atleast one special characters
    5. Contains atleast one number
*/

let score = 0

// 1. Contains at least 8 characters
if(password && password.length >= 8) {
  document.getElementById('validation-ul').innerHTML = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Contains at least 8 characters
    <span>✅</span>
  </li>
  `
  score++
} else {
  document.getElementById('validation-ul').innerHTML = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Contains at least 8 characters
    <span>⚠️</span>
  </li>
  `
}

let hasLowercaseChar = false
let hasUppercaseChar = false
let hasNumber = false

if(password) {
  for(let i = 0; i < password.length; i++) {
    let char = password[i]
    if(char >= 'a' && char <= 'z') {
      hasLowercaseChar = true
    }
    if(char >= 'A' && char <= 'Z') {
      hasUppercaseChar = true
    }
    if(char >= '0' && char <= '9') {
      hasNumber = true
    }
  }
}

// 2. Contains atleast one lowercase character
if(hasLowercaseChar) {
  document.getElementById('validation-ul').innerHTML =
  document.getElementById('validation-ul').innerHTML + `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Contains atleast one lowercase character
    <span>✅</span>
  </li>
  `
  score++
} else {
  document.getElementById('validation-ul').innerHTML =
  document.getElementById('validation-ul').innerHTML + `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Contains atleast one lowercase character
    <span>⚠️</span>
  </li>
  `
}

// 3. Contains atleast one uppercase character
if(hasUppercaseChar) {
  document.getElementById('validation-ul').innerHTML =
  document.getElementById('validation-ul').innerHTML + `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Contains atleast one uppercase character
    <span>✅</span>
  </li>
  `
  score++
} else {
  document.getElementById('validation-ul').innerHTML =
  document.getElementById('validation-ul').innerHTML + `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Contains atleast one uppercase character
    <span>⚠️</span>
  </li>
  `
}

// 4. Contains atleast one special characters
if(password && (password.includes('@') || password.includes('#') || password.includes('!') || password.includes('$') || password.includes('&'))) {
  document.getElementById('validation-ul').innerHTML =
  document.getElementById('validation-ul').innerHTML + `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Contains atleast one special character<br>
    (@, #, !, $, &)
    <span>✅</span>
  </li>
  `
  score++
} else {
  document.getElementById('validation-ul').innerHTML =
  document.getElementById('validation-ul').innerHTML + `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Contains atleast one special character<br>
    (@, #, !, $, &)
    <span>⚠️</span>
  </li>
  `
}

// 5. Contains atleast one number
if(hasNumber) {
  document.getElementById('validation-ul').innerHTML =
  document.getElementById('validation-ul').innerHTML + `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Contains atleast one number
    <span>✅</span>
  </li>
  `
  score++
} else {
  document.getElementById('validation-ul').innerHTML =
  document.getElementById('validation-ul').innerHTML + `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Contains atleast one number
    <span>⚠️</span>
  </li>
  `
}

if(score == 5) {
  document.getElementById('score').innerHTML = `
    <h1 class="display-5 text-center mt-3">
      You password is <span class="badge text-bg-success">Strong</span>
    </h1>
  `
} else if (score >= 3) {
  document.getElementById('score').innerHTML = `
    <h1 class="display-5 text-center mt-3">
      You password is <span class="badge text-bg-warning">Medium</span>
    </h1>
  `
} else {
  document.getElementById('score').innerHTML = `
  <h1 class="display-5 text-center mt-3">
    You password is <span class="badge text-bg-danger">Weak</span>
  </h1>
`
}