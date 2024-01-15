import React from "react";
import { Link } from "react-router-dom";
import myLogo from "./logo.png";

export default function Title() {
  const appTitle = "Snoods & Hoods";

  return (
    <header className="header">
      <div className="logo">
        <img src={myLogo} alt="Snoods and Hoods Logo" />
        <h1>{appTitle}</h1>
      </div>

      {/* <Link to="/basket">
        <button className="btn-basket">Basket</button>
      </Link> */}
    </header>
  );
}
