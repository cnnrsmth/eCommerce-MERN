import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer({ page }) {
  return (
    <div className={`footer ${page}`}>
      <p>Friend or Foe © 2023</p>
      <Link to="">Refund Policy</Link>
      <Link href="">Privacy Policy</Link>
      <a href="https://www.linkedin.com/in/cnnrsmth/">Site by Connor Smith</a>
    </div>
  );
}

{
  /* <Link className="button" to="/register" style={{ float: "left" }}>
  Sign up
</Link>; */
}

export default Footer;
