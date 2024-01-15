import React, { useEffect, useState } from "react";

export default function OrderFormHood({
  currentName,
  currentPic,
  setBasket,
  setShowFormHood,
  showFormHood,
  basket,
}) {
  const [size, setSize] = useState("");
  const [colour1, setColour1] = useState("");
  const [colour2, setColour2] = useState("");
  const [colour3, setColour3] = useState("");
  const [type, setType] = useState("");
  //const [reset, setReset] = useState("");

  const HOODSIZES = [
    { size: "9-12 Months" },
    { size: "12-18 Months" },
    { size: "18-24 Months" },
    { size: "2-3 Years" },
    { size: "3-4 Years" },
    { size: "4-5 Years" },
    { size: "5-6 Years" },
    { size: "7-8 Years" },
    { size: "8-10 Years" },
    { size: "10-12 Years" },
    { size: "12-14 Years" },
  ];

  const GARMENTTYPE = [{ type: "Hood" }, { type: "Tank" }];

  const COLOURS = [
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

  // useEffect(
  //   function () {
  //     setReset("");
  //   },
  //   [type]
  // );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(currentName, size, type, colour1, colour2, colour3);
    const newOrder = [
      {
        fabric: currentName,
        size: size,
        type: type,
        fleece: "None",
        colour1: colour1,
        colour2: colour2,
        colour3: colour3,
      },
    ];

    setBasket((basket) => [newOrder[0], ...basket]);

    // console.log("this is the basket after setting", basket);
    let formData = JSON.parse(localStorage.getItem("basket")) || [];
    formData.push(newOrder);
    var json = JSON.stringify(formData);
    localStorage.setItem("basket", json);

    setShowFormHood(false);
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
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Hood Type</option>
            {GARMENTTYPE.map((gtype) => (
              <option key={gtype.type} value={gtype.type}>
                {gtype.type.toUpperCase()}
              </option>
            ))}
          </select>
          <select
            className="HoodSize"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Choose a Size</option>
            {HOODSIZES.map((size) => (
              <option key={size.size} value={size.size}>
                {size.size.toUpperCase()}
              </option>
            ))}
          </select>
          <select value={colour1} onChange={(e) => setColour1(e.target.value)}>
            <option value="">Choose Top Band Colour</option>
            {COLOURS.map((fc) => (
              <option key={fc.colour} value={fc.colour}>
                {fc.colour.toUpperCase()}
              </option>
            ))}
          </select>
          <select value={colour2} onChange={(e) => setColour2(e.target.value)}>
            <option value="">Choose Bottom Band Colour</option>
            {COLOURS.map((fc1) => (
              <option key={fc1.colour} value={fc1.colour}>
                {fc1.colour.toUpperCase()}
              </option>
            ))}
          </select>
          <select value={colour3} onChange={(e) => setColour3(e.target.value)}>
            <option value="">Choose Cuff Colour</option>
            {COLOURS.map((fc2) => (
              <option key={fc2.colour} value={fc2.colour}>
                {fc2.colour.toUpperCase()}
              </option>
            ))}
          </select>

          <button className="order-btn">Add to Order</button>
        </form>
        <button
          className="cancel-btn"
          onClick={() => {
            setShowFormHood((show) => !show);
            document.body.classList.remove("active-popup");
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
