import React from 'react'
import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom';
import './Users.css'

function Users() {

  const [userArray, setUserArray] = useState([])

  async function fetchUsers() {
    try {
      const response = await fetch('https://ecommerce-process.onrender.com/api/admin/getUsers', {
        method: 'GET',
      })
      const userData = await response.json()
      console.log(userData)
      setUserArray(userData)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (

    <div className="users__container">
      <div className='users__headers'>
        <h2>Users</h2>
        <h2 className="users__gap">&nbsp;||&nbsp;</h2>
        <NavLink className="users__navlink" to="/admin/orders">
            <h2>Orders</h2>
        </NavLink>
      </div>
      <div className="users__table-wrapper">
        <main className="users__table">
          <section className="table__body">
            <table>
              <thead>
                  <tr>
                      <th> ID </th>
                      <th> Email </th>
                      <th> Admin </th>
                  </tr>
                  {userArray && userArray.map((user) => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.email}</td>
                      <td>{user.admin === true ? "Yes" : "No"}</td>
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

export default Users