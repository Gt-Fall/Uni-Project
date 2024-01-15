import React, { useState, useEffect } from "react";
import supabase from "./supabase";

export default function PreMadeItem(preMades) {
  function handleClick(idValue) {
    async function getEditID() {
      let { data: toEdit, error } = await supabase
        .from("PreMade_Stock")
        .select("*")
        .eq("id", idValue);

      const newOrder = [
        {
          fabric: toEdit[0].name,
          size: toEdit[0].size,
          type: toEdit[0].type,
          fleece: "Premade",
          colour1: "Premade",
          colour2: "Premade",
          colour3: toEdit[0].ref,
        },
      ];

      let formData = JSON.parse(localStorage.getItem("basket")) || [];
      formData.push(newOrder);
      var json = JSON.stringify(formData);
      localStorage.setItem("basket", json);
    }
    getEditID();
  }

  function buttonText(value) {
    var elem = document.getElementById(value);
    elem.innerHTML = "In Basket";
    elem.disabled = true;
  }

  return (
    <>
      <section>
        {console.log(preMades)}
        <li className="preMadeItem">
          <img
            className="preMade-Photo"
            src={preMades.preMades.Picture}
            alt={preMades.preMades.text}
          />
          <div className="preMade-blurb">
            <h3 className="preMade-name">{preMades.preMades.name}</h3>
            <p className="preMade-text">{preMades.preMades.text}</p>
            <p className="preMade-cost">Price - £{preMades.preMades.cost}</p>
          </div>
          <button
            className="preMadeButton"
            id={preMades.preMades.ref}
            value={preMades.preMades.id}
            onClick={(e) => {
              handleClick(e.target.value);
              buttonText(preMades.preMades.ref);
            }}
          >
            Order Item
          </button>
        </li>
      </section>
    </>
  );
}
