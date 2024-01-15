import React, { useEffect, useState } from "react";

export default function OrderFormSnood({
  currentName,
  currentPic,
  setBasket,
  setShowFormSnood,
  showFormSnood,
  basket,
}) {
  const [size, setSize] = useState("");
  const [colour, setColour] = useState("");
  //const [type, setType] = useState("");
  const [reset, setReset] = useState("");

  const SNOODSIZES = [
    { size: "2 years" },
    { size: "2-6 years" },
    { size: "6-12 years" },
    { size: "Teen" },
    { size: "Adult" },
  ];

  const FLEECECOLOUR = [
    { colour: "Red" },
    { colour: "Blue" },
    { colour: "Yellow" },
    { colour: "Green" },
    { colour: "Orange" },
    { colour: "Black" },
    { colour: "Navy" },
    { colour: "Teal" },
    { colour: "Pink" },
    { colour: "Purple" },
  ];

  //   useEffect(
  //     function () {
  //       setReset("");
  //     },
  //     [type]
  //   );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(currentName, size, "Snood", colour);
    const newOrder = [
      {
        fabric: currentName,
        size: size,
        type: "Snood",
        fleece: colour,
        colour1: "None",
        colour2: "None",
        colour3: "None",
      },
    ];

    setBasket((basket) => [newOrder[0], ...basket]);

    // console.log("this is the basket after setting", basket);
    let formData = JSON.parse(localStorage.getItem("basket")) || [];
    formData.push(newOrder);
    var json = JSON.stringify(formData);
    localStorage.setItem("basket", json);

    setShowFormSnood(false);
    document.body.classList.remove("active-popup");
  }

  return (
    <>
      <div className="orderForm">
        <h1 className="fabric-page-header"> ADD TO ORDER? </h1>
        <p>{"Fabric choosen is:"} </p>
        <p>{`${currentName}`}</p>
        <img
          className="orderPhoto"
          src={currentPic}
          alt="Picture of selected fabric"
        />

        <form className="order-form" onSubmit={handleSubmit}>
          {/* <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Garment Type</option>
            {GARMENTTYPE.map((gtype) => (
              <option key={gtype.type} value={gtype.type}>
                {gtype.type.toUpperCase()}
              </option>
            ))}
          </select> */}
          <select
            className="SnoodSize"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Choose a Size</option>
            {SNOODSIZES.map((size) => (
              <option key={size.size} value={size.size}>
                {size.size.toUpperCase()}
              </option>
            ))}
          </select>

          <select value={colour} onChange={(e) => setColour(e.target.value)}>
            <option value="">Fleece Colour</option>
            {FLEECECOLOUR.map((fc) => (
              <option key={fc.colour} value={fc.colour}>
                {fc.colour.toUpperCase()}
              </option>
            ))}
          </select>

          <button className="order-btn">Add to Order</button>
        </form>
        <button
          className="cancel-btn"
          onClick={() => {
            setShowFormSnood((show) => !show);
            document.body.classList.remove("active-popup");
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
