import React from 'react';
import { NavLink , Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <div className="side-nav">
        <h3>Reports</h3>
        <NavLink className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link link-inactive"} to="/admin/orders">
          Orders
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link link-inactive"} to="/admin/users">
          Users
        </NavLink>
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;