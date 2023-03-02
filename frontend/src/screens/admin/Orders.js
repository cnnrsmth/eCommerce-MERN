import React from 'react'
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import './Orders.css'

function Orders() {

  const [orderArray, setOrderArray] = useState([])

  async function fetchOrders() {
    try {
      const response = await fetch('http://localhost:5000/api/admin/getOrders', {
        method: 'GET',
      })
      const ordersData = await response.json()
      console.log(ordersData)
      setOrderArray(ordersData)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders__container">
      <div className='order__headers'>
        <h2>Orders</h2>
        <h2 className="orders__gap">&nbsp;||&nbsp;</h2>
        <NavLink className="orders__navlink" to="/admin/users">
            <h2>Users</h2>
        </NavLink>
      </div>
      <div className="orders__table-wrapper">
        <main className="orders__table">
          <section className="table__body">
            <table>
              <thead>
                  <tr>
                      <th> ID </th>
                      <th> Email </th>
                      <th> Order Date </th>
                      <th> Amount £ </th>
                  </tr>
                  {orderArray && orderArray.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.user.email}</td>
                      <td>{new Date(order.createdAt).toLocaleDateString('en-GB')}</td>
                      <td>{order.total}</td>
                    </tr>
                  ))}
              </thead>
            </table>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Orders