import React, { useState, useEffect } from "react";
import supabase from "./supabase";

export default function GetStock({
  stockList,
  setButtonID,
  setEditFormStock,
  setShowFormStock,
}) {
  const stockArray = [...stockList].sort((a, b) =>
    a.in_stock < b.in_stock ? -1 : 1
  );

  function handleClick(editID) {
    console.log("edit clicked", editID);
    setButtonID(editID);
    setEditFormStock((show) => !show);
    setShowFormStock(false);
  }

  return (
    <>
      <div className="stockTable">
        <table>
          <thead>
            <tr>
              <th>Fabric Name</th>
              <th>Text</th>
              <th>Stock Amount</th>
              <th>Reserved</th>
              <th>Photo</th>
              <th>Edit</th>
            </tr>
          </thead>
          {stockArray ? (
            stockArray.map((val, key) => (
              <tbody>
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.text}</td>
                  <td>{val.in_stock}</td>
                  <td>{val.reserved}</td>
                  <td>
                    <img className="stockPic" src={val.photo}></img>
                  </td>
                  <td>
                    {" "}
                    <button
                      type="button"
                      value={val.id}
                      id="complete"
                      onClick={(e) => {
                        handleClick(e.target.value);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td>No Stock</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
