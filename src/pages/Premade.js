import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PreMadeItem from "../componets/PreMadeItem";

export default function Premade(preMades, setBasket, basket) {
  //   const [stockList, setStockList] = useState([]);
  //   const [buttonID, setButtonID] = useState("");
  //   const [showFormStock, setShowFormStock] = useState(false);
  //   const [editFormStock, setEditFormStock] = useState(false);

  return (
    <>
      <h1 class="preMade_Header"> Pre-Made Items </h1>
      <section>
        <ul className="preMade-list">
          {preMades.preMades.map((preMades) =>
            preMades.ordered != "Yes" ? (
              <PreMadeItem key={preMades.id} preMades={preMades} />
            ) : null
          )}
        </ul>
      </section>
    </>
  );
}
