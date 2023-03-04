import React, { useEffect , useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { getTotals} from '../redux/cartSlice'
import checkoutGif from '../photos/checkout.gif'
import './Checkout.css'

function Checkout() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals())
    }, [dispatch])

    const orderId = useSelector(state => state.orderId.orderId)

    const [order, setOrder] = useState([])

    useEffect(() => {
        document.body.classList.add('checkout-page')
        return () => {
            document.body.classList.remove('checkout-page')
        }
    }, [])

    useEffect(() => {
        if (orderId) {
          fetchOrder();
        }
    }, [orderId]);

    async function fetchOrder() {
        try {
          const response = await fetch('https://ecommerce-process.onrender.com/api/checkout/getOrder', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ orderId })
          });
          const data = await response.json();
          console.log(data)
          setOrder(data);
        } catch (error) {
          console.error(error);
        }
    }

    const date = new Date(order[0]?.createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = date.toLocaleString('en-US', options);

    return (
    <div className="checkout__wrapper">
        <div className="checkout__content">
            <div className="checkout__gif">
                <img src={checkoutGif} alt="checkout-gif"/>
            </div>
            <div className="checkout__text">
                <h1>Your order is complete!</h1>
            </div>
            <div className="order__summary">
                <h2>Order Summary</h2>
                <p>Email: {order[0]?.user.email}</p>
                <p>Time of Order: {formattedDate}</p>
                <table>
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {order[0]?.products.map((product) => (
                        <tr key={product.product._id}>
                        <td>{product.product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.product.price}</td>
                        <td>{product.product.price * product.quantity}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3" />
                        <td>
                        <strong>{order[0]?.total}</strong>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="checkout__button">
                <Link to="/home" onClick={() => localStorage.clear()}>
                  Logout
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Checkout