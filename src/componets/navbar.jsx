import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li className="list-item">
             <Link to="/">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="list-item">
             <Link to="/fabrics">Fabrics</Link>
          </li>
          <li className="list-item">
             <Link to="/preMade">PreMade Items</Link>
          </li>
          <li className="list-item">
             <Link to="/basket">Basket</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
