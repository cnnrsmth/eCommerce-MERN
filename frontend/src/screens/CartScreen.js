import './CartScreen.css'
import CartItem from '../components/CartItem.js'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { clearCart , getTotals} from '../redux/cartSlice'
import { setOrderId } from '../redux/orderSlice'


const CartScreen = () => {

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  //update totals when cart state changes
  useEffect(() => {
      dispatch(getTotals())
  }, [cart, dispatch])


  const handleOrderSubmit = () => {
    const token = localStorage.getItem('token')

    fetch('https://ecommerce-process.onrender.com/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ cartItems: cart.cartItems, total: cart.cartTotalAmount })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(setOrderId(data.orderId))
      })
      .catch(error => console.error(error))
  }



  return(
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      { cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/shop">
              <i className="fas fa-chevron-left"></i>
              <span>View Shop</span>
            </Link>
          </div>
        </div>
      ) : (
      <div>
        <div className="titles">
          <h3 className="product-title">Product</h3>
          <h3 className="price">Price</h3>
          <h3 className="quantity">Quantity</h3>
          <h3 className="total">Total</h3>
        </div>
        <div className="cart-items">
          {cart.cartItems.map((cartItem) => {
            return <CartItem key={cartItem._id} cart={cart} cartItem={cartItem} />
          })}
        </div>
        <div className="cart-summary">
            <button className = "clear-btn" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className = "cart-checkout">
                <div className="subtotal">
                    <span>Total</span>
                    <span className="amount">£{cart.cartTotalAmount}</span>
                </div>
                <Link to={localStorage.getItem('token') ? '/checkout' : '/login'}>
                  <button onClick={(event) => {
                    if (!localStorage.getItem('token')) {
                    } else {
                      handleOrderSubmit();
                      handleClearCart();
                    }
                  }}>
                    {localStorage.getItem('token') ? 'Submit order' : 'Login to Checkout'}
                  </button>
                </Link>
                <div className="cart-empty">
                <div className="continue-shopping">
                  <Link to="/shop">
                    <i className="fas fa-chevron-left"></i>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default CartScreen