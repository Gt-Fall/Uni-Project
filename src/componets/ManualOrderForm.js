import supabase from "./supabase";
import { useState, useEffect } from "react";

export default function ManualOrderForm({ setShowFormManual, showFormManual }) {
  const [newOrderNumber, setNewOrderNumber] = useState("");
  const [newFabric, setNewFabric] = useState("");
  const [newSize, setNewSize] = useState("");
  const [newType, setNewType] = useState("");
  const [newFleece, setNewFleece] = useState("");
  const [newTop, setNewTop] = useState("");
  const [newBottom, setNewBottom] = useState("");
  const [newCuffs, setNewCuffs] = useState("");
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerEmail, setNewCustomerEmail] = useState("");
  const [newCustomerPostcode, setNewCustomerPostcode] = useState("");
  const [newPayment, setNewPayment] = useState("");
  const [newComplete, setNewComplete] = useState("");

  const [fabricList, setFabricList] = useState([]);

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

  const GARMENTTYPE = [{ type: "Hood" }, { type: "Tank" }, { type: "Snood" }];

  const COLOURS = [
    { colour: "None" },
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

  useEffect(function () {
    async function getFabricList() {
      const { data: Stock, error } = await supabase
        .from("Stock")
        .select("name");
      setFabricList(Stock);
    }
    getFabricList();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const orderID = Math.round(Math.random() * 1000000);

    async function sendManualOrder() {
      const { data, error } = await supabase.from("Orders").insert([
        {
          Order_Number: orderID,
          fabric: newFabric,
          size: newSize,
          type: newType,
          fleece_colour: newFleece,
          Top_Colour: newTop,
          Bottom_Colour: newBottom,
          Cuffs_Colour: newCuffs,
          postcode: newCustomerPostcode,
          email: newCustomerEmail,
          orderName: newCustomerName,
          Paid: newPayment,
          Complete: newComplete,
        },
      ]);
      console.log("Manual Sent");
    }

    sendManualOrder();
    setShowFormManual((show) => !show);

    function refreshPage() {
      window.location.reload(false);
    }
    //refreshPage();
  }

  return (
    <>
      <div className="editOrderForm">
        <h1 className="editOrderHeader"> New Order</h1>

        <form className="orderAdmin-form" onSubmit={handleSubmit}>
          <label for="editFabricName">Selected Fabric</label>
          <select
            className="editFabricName"
            id="editFabricName"
            required
            name="editFabricName"
            onChange={(e) => setNewFabric(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            {fabricList.map((fabric) => (
              <option key={fabric.name} value={fabric.name}>
                {fabric.name.toUpperCase()}
              </option>
            ))}
          </select>
          <label for="editSize">Select Size</label>
          <select
            className="HoodSize"
            id="editSize"
            name="editSize"
            required
            onChange={(e) => setNewSize(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            {HOODSIZES.map((size) => (
              <option key={size.size} value={size.size}>
                {size.size.toUpperCase()}
              </option>
            ))}
          </select>
          <label for="editType">Select Type</label>
          <select
            className="editType"
            id="editType"
            name="editType"
            required
            onChange={(e) => setNewType(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            {GARMENTTYPE.map((type) => (
              <option key={type.type} value={type.type}>
                {type.type.toUpperCase()}
              </option>
            ))}
          </select>
          <label for="editFleece">Select Fleece Colour</label>
          <select
            className="editFleece"
            id="editFleece"
            name="editFleece"
            required
            onChange={(e) => setNewFleece(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            {COLOURS.map((colour) => (
              <option key={colour.colour} value={colour.colour}>
                {colour.colour.toUpperCase()}
              </option>
            ))}
          </select>
          <label for="editTop">Select Top Band Colour</label>
          <select
            className="editTop"
            id="editTop"
            name="editTop"
            required
            onChange={(e) => setNewTop(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            {COLOURS.map((colour) => (
              <option key={colour.colour} value={colour.colour}>
                {colour.colour.toUpperCase()}
              </option>
            ))}
          </select>
          <label for="editBottom">Select Bottom Band Colour</label>
          <select
            className="editBottom"
            id="editBottom"
            name="editBottom"
            required
            onChange={(e) => setNewBottom(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            {COLOURS.map((colour) => (
              <option key={colour.colour} value={colour.colour}>
                {colour.colour.toUpperCase()}
              </option>
            ))}
          </select>
          <label for="editCuffs">Select Cuffs Colour</label>
          <select
            className="editCuffs"
            id="editCuffs"
            name="editCuffs"
            required
            onChange={(e) => setNewCuffs(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            {COLOURS.map((colour) => (
              <option key={colour.colour} value={colour.colour}>
                {colour.colour.toUpperCase()}
              </option>
            ))}
          </select>
          <label for="editCustomerName">Input Customer Name</label>
          <input
            type="text"
            id="editCustomerName"
            name="editCustomerName"
            required
            maxLength="20"
            onChange={(e) => setNewCustomerName(e.target.value)}
          ></input>
          <label for="editCustomerEmail">Input Customer Email</label>
          <input
            type="email"
            id="editCustomerEmail"
            name="editCustomerEmail"
            required
            maxLength="40"
            onChange={(e) => setNewCustomerEmail(e.target.value)}
          ></input>
          <label for="editCustomerPostcode">Input Customer Postcode</label>
          <input
            type="text"
            id="editCustomerPostcode"
            name="editCustomerPostcode"
            required
            maxLength="10"
            onChange={(e) => setNewCustomerPostcode(e.target.value)}
          ></input>
          <label for="editPayment"> Payment Made? </label>
          <select
            name="editPayment"
            required
            onChange={(e) => setNewPayment(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label for="editComplete"> Order Completed? </label>
          <select
            name="editComplete"
            required
            onChange={(e) => setNewComplete(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <button className="btn">Submit</button>
        </form>
        <button
          className="stockbtn"
          onClick={() => {
            setShowFormManual((show) => !show);
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
