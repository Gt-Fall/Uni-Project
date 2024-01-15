import supabase from "./supabase";
import { useState, useEffect } from "react";

export default function AddPMStockForm({
  setShowFormPMStock,
  showFormPMStock,
}) {
  const [itemName, setItemName] = useState("");
  const [itemText, setItemText] = useState("");
  const [itemRef, setItemRef] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemOrdered, setItemOrdered] = useState("");
  const [itemSent, setItemSent] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [picURL, setPicURL] = useState("Nothing");

  async function uploadFile(file) {
    const { data, error } = await supabase.storage
      .from("fabrics")
      .upload(`PreMadeItems/${itemName}.png`, file);
    if (error) {
      console.log("Error in sending");
    } else {
      console.log("sending sucessful");
    }
  }

  async function uploadNewPMStock() {
    const { data: Purl } = supabase.storage
      .from("fabrics")
      .getPublicUrl(`PreMadeItems/${itemName}.png`);

    var pictureUrl = Purl.publicUrl;

    const { data, error } = await supabase.from("PreMade_Stock").insert([
      {
        name: itemName,
        text: itemText,
        ref: itemRef,
        size: itemSize,
        type: itemType,
        ordered: itemOrdered,
        sent: itemSent,
        cost: itemPrice,
        Picture: pictureUrl,
      },
    ]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    //console.log("Uploaded:", fabName, fabText, fabStock, fabImage);

    uploadFile(itemImage);
    uploadNewPMStock();

    setShowFormPMStock((show) => !show);

    function refreshPage() {
      window.location.reload(false);
    }
    //refreshPage();
  }

  return (
    <>
      <div className="addStockForm">
        <h1 className="fabric-page-header"> Add Stock Below </h1>

        <form className="stock-form" onSubmit={handleSubmit}>
          <label for="itemName">Name of Item</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            required
            maxLength="20"
            placeholder="Max 20 characters"
            onChange={(e) => setItemName(e.target.value)}
          ></input>
          <label for="text">Add Text Description</label>
          <textarea
            name="text"
            id="text"
            rows="3"
            cols="75"
            maxLength="80"
            placeholder="Add discrption here"
            required
            onChange={(e) => setItemText(e.target.value)}
          ></textarea>
          <label for="ref">Unique Reference</label>
          <input
            type="text"
            name="ref"
            id="ref"
            maxLength="10"
            required
            onChange={(e) => setItemRef(e.target.value)}
          ></input>
          <label for="ref">Size</label>
          <input
            type="text"
            name="size"
            id="size"
            maxLength="20"
            required
            onChange={(e) => setItemSize(e.target.value)}
          ></input>
          <label for="type">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            maxLength="10"
            required
            onChange={(e) => setItemType(e.target.value)}
          ></input>
          <label for="cost">Price</label>
          <input
            type="number"
            name="cost"
            id="cost"
            min="0"
            required
            onChange={(e) => setItemPrice(e.target.value)}
          ></input>
          <label for="pmOrdered"> Item Ordered? </label>
          <select
            name="pmOrdered"
            required
            onChange={(e) => setItemOrdered(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label for="PMSent"> Order Sent? </label>
          <select
            name="PMSent"
            required
            onChange={(e) => setItemSent(e.target.value)}
          >
            <option hidden disabled selected value=""></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label for="image_input">Add a Photo</label>
          <input
            type="file"
            id="image_input"
            name="image_input"
            accept="image/png, image/jpeg"
            onChange={(event) => {
              let file = event.target.files[0];
              setItemImage(file);
            }}
          ></input>
          <button className="btn">Submit</button>
        </form>
        <button
          className="stockbtn"
          onClick={() => {
            setShowFormPMStock((show) => !show);
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
