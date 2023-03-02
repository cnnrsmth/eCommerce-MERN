import './CartItem.css'
import { useDispatch } from 'react-redux'
import { addToCart, decreaseCartQty, removeFromCart } from '../redux/cartSlice'

const CartItem = ({cartItem , cart}) => {
    
    const dispatch = useDispatch()

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleDecreaseCartQty = (cartItem) => {
        dispatch(decreaseCartQty(cartItem))
    }

    const handleIncreaseCartQty = (cartItem) => {
        dispatch(addToCart(cartItem))
    }
  
    return (
    <>
        <div className="cart-item">
            <div className="cart-product">
                <img src={cartItem.imageUrl} alt={cartItem.name} />
                <div>
                    <h3>{cartItem.name}</h3>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                </div>
            </div>
            <div className="cart-product-price">
                £{cartItem.price}
            </div>
            <div className="cart-product-quantity">
                <button onClick={() => handleDecreaseCartQty(cartItem)}>-</button>
                <div className="count">
                    {cartItem.cartQuantity}
                </div>
                <button onClick={() => handleIncreaseCartQty(cartItem)}>+</button>
            </div>
            <div className="cart-product-total-price">
                £{cartItem.price * cartItem.cartQuantity}
            </div>
        </div>
    </>
  )
}

export default CartItem