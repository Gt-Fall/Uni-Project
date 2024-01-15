import React, { useState, useEffect } from "react";
import supabase from "./supabase";

export default function GetPMStock({
  pmStockList,
  setButtonID,
  setEditFormPMStock,
  setShowFormPMStock,
}) {
  const stockArray = [...pmStockList].sort((a, b) =>
    a.ordered < b.ordered ? -1 : 1
  );

  function handleClick(editID) {
    console.log("edit clicked", editID);
    setButtonID(editID);
    setEditFormPMStock((show) => !show);
    setShowFormPMStock(false);
  }

  return (
    <>
      <div className="stockTable">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Text</th>
              <th>Price(£)</th>
              <th>Ref</th>
              <th>Size</th>
              <th>Type</th>
              <th>Orderd</th>
              <th>Sent</th>
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
                  <td>{val.cost}</td>
                  <td>{val.ref}</td>
                  <td>{val.size}</td>
                  <td>{val.type}</td>
                  <td>{val.ordered}</td>
                  <td>{val.sent}</td>
                  <td>
                    <img className="stockPic" src={val.Picture}></img>
                  </td>
                  <td>
                    <button
                      type="button"
                      value={val.id}
                      id="edit"
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
