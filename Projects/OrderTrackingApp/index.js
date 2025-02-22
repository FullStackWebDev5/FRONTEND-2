/*
  # Status updates for order:
    - Instantly: Order confirmed ✅
    - After 2 seconds: Order is being prepared 🍲
    - After 10 seconds: Order prepared 🎉
    - After 5 seconds: Order handed over to the delivery person 📦
    - After 3 seconds: Order is on the way 🛵
    - After 8 seconds: Order has reached it's destination 📍
    - After 4 seconds: Order has been delivered 😋

    - Total time for processing order: 32 seconds
*/

const ORDERS = []

const orderBeingPrepared = (orderIndex) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setOrderStatus(orderIndex, 'assets/order-being-prepared.gif', 'Order is being prepared')
      resolve()
    }, 2000)
  })
}

const orderPrepared = (orderIndex) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setOrderStatus(orderIndex, 'assets/order-prepared.gif', 'Order prepared')
      resolve()
    }, 10000)
  })
}

const orderHandedOver = (orderIndex) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setOrderStatus(orderIndex, 'assets/order-handed-over.gif', 'Order picked up')
      resolve()
    }, 5000)
  })
}

const orderOnTheWay = (orderIndex) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setOrderStatus(orderIndex, 'assets/order-on-the-way.gif', 'Order is on the way')
      resolve()
    }, 3000)
  })
}

const orderReachedDestination = (orderIndex) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setOrderStatus(orderIndex, 'assets/order-reached-destination.gif', 'Order reached destination')
      resolve()
    }, 8000)
  })
}

const orderDelivered = (orderIndex) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setOrderStatus(orderIndex, 'assets/order-delivered.gif', 'Order has been delivered')
      resolve()
    }, 4000)
  })
}
    
const placeOrder = async () => {
  try {
    const restaurantName = document.getElementById('rest-name').value
    const receiverName = document.getElementById('receiver-name').value
    const totalItems = document.getElementById('total-items').value
    const totalAmount = document.getElementById('total-amount').value
    resetForm()

    ORDERS.push({ 
      restaurantName,
      receiverName,
      totalItems,
      totalAmount
    })

    const orderIndex = ORDERS.length - 1
    createOrderCard(orderIndex)

    setOrderStatus(orderIndex, 'assets/order-confirmed.gif', 'Order confirmed')
    await orderBeingPrepared(orderIndex)
    await orderPrepared(orderIndex)
    await orderHandedOver(orderIndex)
    await orderOnTheWay(orderIndex)
    await orderReachedDestination(orderIndex)
    await orderDelivered(orderIndex)
  } catch (error) {
    console.log('Something went wrong!')
  }
}

function setOrderStatus(orderIndex, imgSrc, orderTxt) {
  document.getElementById(`order-status-img-${orderIndex}`).src = imgSrc
  document.getElementById(`order-status-text-${orderIndex}`).innerText = orderTxt
}

function createOrderCard (orderIndex) {
  const colDiv = document.createElement('div')
  colDiv.classList.add('col-lg-4', 'col-md-6', 'col-xs-12', 'mt-2')

  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card', 'text-center', 'lead')

  const cardHeaderDiv = document.createElement('div')
  cardHeaderDiv.classList.add('card-header')
  cardHeaderDiv.innerText = ORDERS[orderIndex].restaurantName

  const cardBodyDiv = document.createElement('div')
  cardBodyDiv.classList.add('card-body')

  const orderDetailsUl = document.createElement('ul')
  orderDetailsUl.classList.add('list-group', 'list-group-flush')
  orderDetailsUl.style.textAlign = 'left'
  const orderFor = document.createElement('li')
  orderFor.classList.add('list-group-item')
  orderFor.innerHTML = `Deliver to: 
    <b>${ORDERS[orderIndex].receiverName}</b>`
  const noOfItems = document.createElement('li')
  noOfItems.classList.add('list-group-item')
  noOfItems.innerHTML = `Total items: 
    <b>${ORDERS[orderIndex].totalItems}</b>`
  const totalAmount = document.createElement('li')
  totalAmount.classList.add('list-group-item')
  totalAmount.innerHTML = `Total amount: 
    <b>$${ORDERS[orderIndex].totalAmount}</b>`
  orderDetailsUl.append(orderFor, noOfItems, totalAmount)

  const orderStatusDiv = document.createElement('div')
  orderStatusDiv.classList.add('order-status')
  const orderStatusImg = document.createElement('img')
  orderStatusImg.width = 75
  orderStatusImg.id = `order-status-img-${orderIndex}`
  const orderStatusTxt = document.createElement('p')
  orderStatusTxt.id = `order-status-text-${orderIndex}`
  orderStatusDiv.append(orderStatusImg, orderStatusTxt)

  cardBodyDiv.append(orderDetailsUl, orderStatusDiv)

  const cardFooterDiv = document.createElement('div')
  cardFooterDiv.classList.add('card-footer', 'text-body-secondary')
  const now = new Date()
  cardFooterDiv.innerText = new Date().toLocaleString("en-GB", {
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: 'numeric', 
    minute: 'numeric',
    second: 'numeric'
  })

  cardDiv.append(cardHeaderDiv, cardBodyDiv, cardFooterDiv)
  colDiv.append(cardDiv)
  document.getElementById('order-list').append(colDiv)
}

function resetForm() {
  document.getElementById('rest-name').value = ''
  document.getElementById('receiver-name').value = ''
  document.getElementById('total-items').value = ''
  document.getElementById('total-amount').value = ''
}