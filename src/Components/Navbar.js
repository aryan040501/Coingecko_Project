import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">LOGO</div>
      <div className="menu">
        <Link to="/">
          <div className="menu-items">All Coins</div>
        </Link>
        <div className="menu-items">ITEM 2</div>
        <div className="menu-items">ITEM 3</div>
      </div>
    </div>
  );
}

export default Navbar;
