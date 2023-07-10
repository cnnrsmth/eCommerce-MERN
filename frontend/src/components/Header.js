import React from "react";
import "./Header.css";
import headervid from "../photos/headervid.mp4";

function Header() {
  return (
    <div className="homepage__vid">
      <video src={headervid} autoPlay loop muted />
    </div>
  );
}

export default Header;
