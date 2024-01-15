import supabase from "./supabase";
import { useState, useEffect } from "react";

export default function EditForm({
  setShowFormOrder,
  showFormOrder,
  buttonID,
}) {
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
  const [editArray, setEditArray] = useState([
    { Order_Number: "No Order Selected" },
  ]);
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

  useEffect(
    function () {
      async function getEditID() {
        if (buttonID) {
          let { data: ToEdit, error } = await supabase
            .from("Orders")
            .select("*")
            .eq("id", buttonID);

          setEditArray(ToEdit);
        } else {
          console.log("NoIdData");
        }
      }
      getEditID();
      console.log("The button press details", editArray);
    },
    [buttonID]
  );

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
    console.log(
      "Edit form submited",
      newOrderNumber,
      newFabric,
      newSize,
      newType,
      newFleece,
      newTop,
      newBottom,
      newCuffs,
      newCustomerName,
      newCustomerEmail,
      newCustomerPostcode,
      newPayment,
      newComplete
    );
    async function updateOrderNumber(newOrderNumber) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ Order_Number: newOrderNumber })
        .eq("id", buttonID);
    }
    async function updateOrderSize(newSize) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ size: newSize })
        .eq("id", buttonID);
    }
    async function updateOrderFabric(newFabric) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ fabric: newFabric })
        .eq("id", buttonID);
    }
    async function updateOrderType(newType) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ type: newType })
        .eq("id", buttonID);
    }
    async function updateOrderFleece(newFleece) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ fleece_colour: newFleece })
        .eq("id", buttonID);
    }
    async function updateOrderTop(newTop) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ Top_Colour: newTop })
        .eq("id", buttonID);
    }
    async function updateOrderBottom(newBottom) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ Bottom_Colour: newBottom })
        .eq("id", buttonID);
    }
    async function updateOrderCuffs(newCuffs) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ Cuffs_Colour: newCuffs })
        .eq("id", buttonID);
    }
    async function updateOrderCustomerName(newCustomerName) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ orderName: newCustomerName })
        .eq("id", buttonID);
    }
    async function updateOrderCustomerEmail(newCustomerEmail) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ email: newCustomerEmail })
        .eq("id", buttonID);
    }
    async function updateOrderCustomerPostcode(newCustomerPostcode) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ postcode: newCustomerPostcode })
        .eq("id", buttonID);
    }
    async function updateOrderPayment(newPayment) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ Paid: newPayment })
        .eq("id", buttonID);
    }
    async function updateOrderComplete(newComplete) {
      const { data, error } = await supabase
        .from("Orders")
        .update({ Complete: newComplete })
        .eq("id", buttonID);
    }

    async function depleatStock(depleatValue) {
      var fabricName = editArray[0].fabric;

      let { data: stock2, error } = await supabase
        .from("Stock")
        .select("in_stock , reserved")
        .eq("name", fabricName);

      console.log("stock2 = ", stock2);
      var newStockLevel = stock2[0].in_stock - depleatValue;
      var newReserveLevel = stock2[0].reserved - depleatValue;

      const { data, error2 } = await supabase
        .from("Stock")
        .update({ in_stock: newStockLevel })
        .eq("name", fabricName);

      const { data2, error3 } = await supabase
        .from("Stock")
        .update({ reserved: newReserveLevel })
        .eq("name", fabricName);
    }

    async function addStock(addValue) {
      var fabricName = editArray[0].fabric;

      let { data: stock2, error } = await supabase
        .from("Stock")
        .select("in_stock , reserved")
        .eq("name", fabricName);

      console.log("stock2 = ", stock2);
      var newStockLevel = stock2[0].in_stock + addValue;
      var newReserveLevel = stock2[0].reserved + addValue;

      const { data, error2 } = await supabase
        .from("Stock")
        .update({ in_stock: newStockLevel })
        .eq("name", fabricName);

      const { data2, error3 } = await supabase
        .from("Stock")
        .update({ reserved: newReserveLevel })
        .eq("name", fabricName);
    }

    if (newSize) {
      updateOrderSize(newSize);
    }
    if (newOrderNumber) {
      updateOrderNumber(newOrderNumber);
    }
    if (newFabric) {
      updateOrderFabric(newFabric);
    }
    if (newType) {
      updateOrderType(newType);
    }
    if (newFleece) {
      updateOrderFleece(newFleece);
    }
    if (newTop) {
      updateOrderTop(newTop);
    }
    if (newBottom) {
      updateOrderBottom(newBottom);
    }
    if (newCuffs) {
      updateOrderCuffs(newCuffs);
    }
    if (newCustomerName) {
      updateOrderCustomerName(newCustomerName);
    }
    if (newCustomerEmail) {
      updateOrderCustomerEmail(newCustomerEmail);
    }
    if (newCustomerPostcode) {
      updateOrderCustomerPostcode(newCustomerPostcode);
    }
    if (newPayment) {
      updateOrderPayment(newPayment);
    }
    if (newComplete) {
      updateOrderComplete(newComplete);
      if (
        editArray[0].Complete == "No" &&
        editArray[0].type == "Snood" &&
        editArray[0].fleece_colour != "Premade"
      ) {
        //console.log("Running Delation of Stock");
        var snoodValue = 0.5;
        depleatStock(snoodValue);
      } else if (
        editArray[0].Complete == "No" &&
        editArray[0].type != "Snood" &&
        editArray[0].fleece_colour != "Premade"
      ) {
        var hoodValue = 2;
        depleatStock(hoodValue);
      } else if (
        editArray[0].Complete == "Yes" &&
        editArray[0].type == "Snood" &&
        editArray[0].fleece_colour != "Premade"
      ) {
        var snoodValue = 0.5;
        addStock(snoodValue);
      } else if (
        editArray[0].Complete == "Yes" &&
        editArray[0].type != "Snood" &&
        editArray[0].fleece_colour != "Premade"
      ) {
        var hoodValue = 2;
        addStock(hoodValue);
      }
    }
    setShowFormOrder((show) => !show);
  }

  return (
    <>
      <div className="editOrderForm">
        <h1 className="editOrderHeader"> Edit Order</h1>

        <form className="orderAdmin-form" onSubmit={handleSubmit}>
          <label for="editOrderNumber">Order Number</label>
          <input
            type="text"
            id="editOrderNumber"
            name="editOrderNumber"
            placeholder={editArray[0].Order_Number}
            maxLength="15"
            onChange={(e) => setNewOrderNumber(e.target.value)}
          ></input>
          <label for="editFabricName">Selected Fabric</label>
          <select
            className="editFabricName"
            id="editFabricName"
            name="editFabricName"
            onChange={(e) => setNewFabric(e.target.value)}
          >
            <option value="">{editArray[0].fabric}</option>
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
            onChange={(e) => setNewSize(e.target.value)}
          >
            <option value="">{editArray[0].size}</option>
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
            onChange={(e) => setNewType(e.target.value)}
          >
            <option value="">{editArray[0].type}</option>
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
            onChange={(e) => setNewFleece(e.target.value)}
          >
            <option value="">{editArray[0].fleece_colour}</option>
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
            onChange={(e) => setNewTop(e.target.value)}
          >
            <option value="">{editArray[0].Top_Colour}</option>
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
            onChange={(e) => setNewBottom(e.target.value)}
          >
            <option value="">{editArray[0].Bottom_Colour}</option>
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
            onChange={(e) => setNewCuffs(e.target.value)}
          >
            <option value="">{editArray[0].Cuffs_Colour}</option>
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
            maxLength="20"
            placeholder={editArray[0].orderName}
            onChange={(e) => setNewCustomerName(e.target.value)}
          ></input>
          <label for="editCustomerEmail">Input Customer Email</label>
          <input
            type="email"
            id="editCustomerEmail"
            name="editCustomerEmail"
            maxLength="40"
            placeholder={editArray[0].email}
            onChange={(e) => setNewCustomerEmail(e.target.value)}
          ></input>
          <label for="editCustomerPostcode">Input Customer Postcode</label>
          <input
            type="text"
            id="editCustomerPostcode"
            name="editCustomerPostcode"
            maxLength="10"
            placeholder={editArray[0].postcode}
            onChange={(e) => setNewCustomerPostcode(e.target.value)}
          ></input>
          <label for="editPayment"> Payment Made? </label>
          <select
            name="editPayment"
            onChange={(e) => setNewPayment(e.target.value)}
          >
            <option hidden disabled selected vlaue={editArray[0].Paid}>
              {editArray[0].Paid}
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label for="editComplete"> Order Completed? </label>
          <select
            name="editComplete"
            onChange={(e) => setNewComplete(e.target.value)}
          >
            <option hidden disabled selected vlaue={editArray[0].Complete}>
              {editArray[0].Complete}
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <button className="btn">Submit</button>
        </form>
        <button
          className="stockbtn"
          onClick={() => {
            setShowFormOrder((show) => !show);
          }}
        >
          Cancel
        </button>
        <button
          onClick={async () => {
            const repon = window.confirm("Are You Sure");
            if (repon) {
              const { data, error } = await supabase
                .from("Orders")
                .delete()
                .eq("id", buttonID);

              console.log("deleting", buttonID);
              setShowFormOrder((show) => !show);
              window.location.reload(false);
            }
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}
