const contacts = [
  {
    name: 'John Doe',
    phone: '+91 1234567890',
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown, USA',
    avatar: 'https://reqres.in/img/faces/4-image.jpg'
  },
  {
    name: 'Jane Smith',
    phone: '+91 9876543210',
    email: 'janesmith@example.com',
    address: '456 Elm St, Anytown, USA',
    avatar: 'https://reqres.in/img/faces/11-image.jpg'
  },
  {
    name: 'Alice Johnson',
    phone: '+91 0987654321',
    email: 'alicejohnson@example.com',
    address: '789 Oak St, Anytown, USA',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  },
  {
    name: 'Bob Brown',
    phone: '+91 5555555555',
    email: 'bobbrown@example.com',
    address: '234 Pine St, Anytown, USA',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  },
  {
    name: 'Charlie Davis',
    phone: '+91 8888888888',
    email: 'charliedavis@example.com',
    address: '345 Willow St, Anytown, USA',
    avatar: 'https://reqres.in/img/faces/10-image.jpg'
  },
  {
    name: 'David Wilson',
    phone: '+91 4444444444',
    email: 'davidwilson@example.com',
    address: '678 Maple St, Anytown, USA',
    avatar: 'https://reqres.in/img/faces/9-image.jpg'
  },
  {
    name: 'Emily Thompson',
    phone: '+91 7777777777',
    email: 'emilythompson@example.com',
    address: '901 Grass St, Anytown, USA',
    avatar: 'https://reqres.in/img/faces/5-image.jpg'
  },
  {
    name: 'Frank Miller',
    phone: '+91 3333333333',
    email: 'frankmiller@example.com',
    address: '1234 Oak St, Anytown, USA',
    avatar: 'https://reqres.in/img/faces/3-image.jpg'
  },
  {
    name: 'Grace Lee',
    phone: '+91 2222222222',
    email: 'gracelee@example.com',
    address: '567 Willow St, Anytown, USA',
    avatar: 'https://reqres.in/img/faces/7-image.jpg'
  }
]

// Initial display
displayContacts(contacts)
displayDetails(0)

// Logic 1: Using contacts array, create dynamic list items under contact list
function displayContacts(contacts) {
  contacts.forEach((contact, index) => {
    document.getElementById('contact-list').innerHTML += `
      <li class="list-group-item list-group-item-light d-flex justify-content-between align-items-center" onclick="displayDetails(${index})">
        <span class="d-flex align-items-center">
          <img src="${contact.avatar}" alt="current-user-img" width="50" height="50" class="contact-user-img mb-1 me-2">
          <span class="d-flex flex-column">
            <span class="fs-5 fw-medium">${contact.name}</span>
            <span class="fw-lighter">${contact.phone}</span>
          </span>
        </span>
        <i class="fa-solid fa-angle-right more-details-icon"></i>
      </li>
    `
  })
}

// Logic 2: Displaying individual contact details
function displayDetails(index) {
  let contact = contacts[index]
  document.getElementById('detail-card').innerHTML = `
    <img src="${contact.avatar}" class="card-img-top custom-card-img mt-1" alt="contact-user-img">
    <div class="card-body">
      <h5 class="card-title">${contact.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <i class="fa-solid fa-phone me-2"></i>
        ${contact.phone}
      </li>
      <li class="list-group-item">
        <i class="fa-solid fa-envelope me-2"></i>
        ${contact.email}
      </li>
      <li class="list-group-item">
        <i class="fa-solid fa-location-dot me-2"></i>
        ${contact.address}
      </li>
    </ul>
  `
}

// Logic 3: Search functionality
function searchContacts() {
  const searchText = document.getElementById('search-input').value
  const filteredContacts = contacts.filter(contact => {
    return contact.name.includes(searchText)
  })
  document.getElementById('contact-list').innerHTML = ''
  displayContacts(filteredContacts)
}

function resetContacts() {
  console.log('reset')
  document.getElementById('contact-list').innerHTML = ''
  displayContacts(contacts)
  displayDetails(0)
}