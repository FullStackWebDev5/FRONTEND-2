/*
  # Functionalities:
    1. Transfer out
      a. Collect user input
        - Beneficiary name
        - Amount to transfer
      b. Deduct amount from available balance, display updated balance
      c. Display transaction record under 'recent transactions'
    2. Add money
      a. Collect user input
        - Amount to deposit
      b. Add amount to the available balance, display updated balance
      c. Display transaction record under 'recent transactions'

*/

const transferOut = () => {
  const beneficiaryName = prompt('Enter beneficiary name')
  const transferAmount = Number(prompt('Enter amount to transfer'))
  if(!beneficiaryName || !transferAmount) {
    alert('Invalid details')
    return
  }

  let availableBalance = Number(document.getElementById('available-balance').innerText)
  availableBalance -= transferAmount
  document.getElementById('available-balance').innerText = availableBalance.toFixed(2)

  let transactionTime = new Date().toLocaleString()

  document.getElementById('recent-transaction').innerHTML =
  `
    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">UPI: ${beneficiaryName}</h5>
        <p class="lead m-0 text-danger">- ₹ ${transferAmount.toFixed(2)}</p class="lead">
      </div>
      <p class="mb-1">Transfer out</p>
      <small>${transactionTime}</small>
    </a>
  ` + document.getElementById('recent-transaction').innerHTML 
}

const addMoney = () => {
  const depositAmount = Number(prompt('Enter amount to transfer'))
  if(!depositAmount) {
    alert('Invalid details')
    return
  }

  let availableBalance = Number(document.getElementById('available-balance').innerText)
  availableBalance += depositAmount
  document.getElementById('available-balance').innerText = availableBalance.toFixed(2)

  let transactionTime = new Date().toLocaleString()

  document.getElementById('recent-transaction').innerHTML =
  `
    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">UPI: Self</h5>
        <p class="lead m-0 text-success">+ ₹ ${depositAmount.toFixed(2)}</p class="lead">
      </div>
      <p class="mb-1">Transfer in</p>
      <small>${transactionTime}</small>
    </a>
  ` + document.getElementById('recent-transaction').innerHTML 
}