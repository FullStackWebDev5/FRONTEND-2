import userSignup from './user.js'
import {
  getAllProducts,
  getFilteredProducts
} from './product.js'

import {
  c,
  addToCart,
  removeFromCart
} from './cart.js'

import {
  d as abc,
  confirmOrder as def,
  cancelOrder as ghi
} from './order.js'

userSignup()

getAllProducts()
getFilteredProducts()

console.log(c)
addToCart()
removeFromCart()

console.log(abc)
def()
ghi()