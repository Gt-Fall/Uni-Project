import React, { useState, useEffect } from "react";

export default function GetBasket({ basket, setBasket }) {
  const basketData = JSON.parse(localStorage.getItem("basket"));

  if (basketData) {
    return (
      <>
        <h2 id="basket_subhead"> The Basket </h2>

        <div className="basketTable">
          <table>
            <thead>
              <tr>
                <th>Garment</th>
                <th>Fabric</th>
                <th>Size</th>
                <th>Fleece Colour</th>
                <th>Top Colour</th>
                <th>Bottom Colour</th>
                <th>Cuffs Colour</th>
              </tr>
            </thead>
            {basketData.map((basket1) =>
              basket1.map((basket, key) => (
                <tbody>
                  <tr key={key}>
                    <td>{basket.type}</td>
                    <td>{basket.fabric}</td>
                    <td>{basket.size}</td>
                    <td>{basket.fleece}</td>
                    <td>{basket.colour1}</td>
                    <td>{basket.colour2}</td>
                    <td>{basket.colour3}</td>
                  </tr>
                </tbody>
              ))
            )}
          </table>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 class="empty_statement">Basket is empty</h2>
      </>
    );
  }
}
