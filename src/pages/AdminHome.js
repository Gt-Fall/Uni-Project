import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminHome({ token, setToken }) {
  const navigate = useNavigate();

  useEffect(function () {
    console.log(token);
    if (!token) {
      navigate("/adminLogin");
    }
  }, []);

  return (
    <>
      <h2> This is admin Home page </h2>
      <div className="admin_options">
        <div className="admin-home-divs">
          <span>Click here for Orders </span>
          <Link to="/adminOrder">
            <button className="admin-btn">Orders</button>
          </Link>
        </div>
        <div className="admin-home-divs">
          <span>Click here for Fabric Stock </span>
          <Link to="/adminStock">
            <button className="admin-btn">Stock</button>
          </Link>
        </div>
        <div className="admin-home-divs">
          <span>Click here for Premade Stock </span>
          <Link to="/adminPreMade">
            <button className="admin-btn">PreMade</button>
          </Link>
        </div>
        <button
          onClick={() => {
            setToken(false);
            navigate("/adminLogin");
          }}
        >
          LogOut
        </button>
      </div>
    </>
  );
}
