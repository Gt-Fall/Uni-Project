import supabase from "./supabase";
import React, { useState, useEffect } from "react";

export default function FabricItem({
  fabrics,
  setShowFormHood,
  setShowFormSnood,
  setCurrentId,
  setCurrentName,
  setCurrentPic,
}) {
  const [customerStock, setCustomerStock] = useState("");

  useEffect(function () {
    const custFab = fabrics.in_stock - fabrics.reserved;
    setCustomerStock(custFab);
  }, []);

  return (
    <li className="fabricItem">
      <img className="fabricPhoto" src={fabrics.photo} alt={fabrics.text} />
      <div className="fabric-blurb">
        {" "}
        <h3 className="fabric-name">{fabrics.name}</h3>
        <p className="fabric-text">{fabrics.text}</p>
        <div className="stockText">
          {customerStock > 5 ? <p className="inStockText">In Stock </p> : null}
          {customerStock <= 5 && customerStock > 0 ? (
            <p className="lowStockText">Low Stock </p>
          ) : null}
          {customerStock == 0 ? (
            <p className="outStockText">Out of Stock</p>
          ) : null}
        </div>
        <div className="order-btn">
          {customerStock > 0 ? (
            <button
              className="hoodButton"
              onClick={() => {
                setShowFormHood((show) => !show);
                setCurrentId(fabrics.id);
                setCurrentName(fabrics.name);
                setCurrentPic(fabrics.photo);
                document.body.classList.add("active-popup");
              }}
            >
              Order Hood
            </button>
          ) : null}
          {customerStock > 0 ? (
            <button
              className="snoodButton"
              onClick={() => {
                setShowFormSnood((show) => !show);
                setCurrentId(fabrics.id);
                setCurrentName(fabrics.name);
                setCurrentPic(fabrics.photo);
                document.body.classList.add("active-popup");
              }}
            >
              Order Snood
            </button>
          ) : null}
        </div>
      </div>
    </li>
  );
}
