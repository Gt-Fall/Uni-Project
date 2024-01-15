import React, { useState, useEffect } from "react";
import supabase from "./supabase";

export default function GetCompleteTable({
  completeOr,
  setButtonID,
  setShowFormOrder,
  setShowFormManual,
}) {
  const [currentClick, setCurrentClick] = useState("");

  const orderedArray = [...completeOr].sort((a, b) =>
    a.Order_Number < b.Order_Number ? -1 : 1
  );

  function handleClick(editID) {
    //console.log("edit clicked", editID);
    setButtonID(editID);
    setShowFormOrder((show) => !show);
    setShowFormManual(false);
  }

  useEffect(
    function () {
      setCurrentClick("");
    },
    [currentClick]
  );

  return (
    <>
      <div className="CompleteTable">
        <table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Fabric</th>
              <th>Size</th>
              <th>Type</th>
              <th>Fleece Colour</th>
              <th>Top Colour</th>
              <th>Bottom Colour</th>
              <th>Cuffs Colour</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Customer Postcode</th>
              <th>Paid</th>
              <th>Edit</th>
            </tr>
          </thead>
          {orderedArray ? (
            orderedArray.map((val, key) => (
              <tbody>
                <tr key={key}>
                  <td>{val.Order_Number}</td>
                  <td>{val.fabric}</td>
                  <td>{val.size}</td>
                  <td>{val.type}</td>
                  <td>{val.fleece_colour}</td>
                  <td>{val.Top_Colour}</td>
                  <td>{val.Bottom_Colour}</td>
                  <td>{val.Cuffs_Colour}</td>
                  <td>{val.orderName}</td>
                  <td>{val.email}</td>
                  <td>{val.postcode}</td>
                  <td>{val.Paid}</td>
                  <td>
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
                <td>No Complete Orders</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
