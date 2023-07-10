import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logo from "../photos/logo.png";

const Navbar = ({ click, visible }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  useEffect(() => {
    if (isLoggedIn) {
      handleAdminCheck();
    } else {
      setIsAdmin(false);
    }
  }, [isLoggedIn]);

  async function handleAdminCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await fetch(
        "https://ecommerce-process.onrender.com/api/admin/accessAdmin",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setIsAdmin(data.admin);
    }
  }

  return (
    <nav className={`navbar ${visible ? "navbar-visible" : "navbar-hidden"}`}>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <div className="navbar__logo">
          <img className="logo" src={logo} alt="logo" />
          <h2>Friend or Foe</h2>
        </div>
      </Link>
      <ul className="navbar__links">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link
            to={isLoggedIn ? "/home" : "/login"}
            onClick={() => {
              if (isLoggedIn) {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
              }
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{cartTotalQuantity}</span>
            </span>
          </Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
