import supabase from "./supabase";
import { useState, useEffect } from "react";

export default function EditPMStockForm({ setEditFormPMStock, buttonID }) {
  const [newItemName, setNewItemName] = useState("");
  const [newItemText, setNewItemText] = useState("");
  const [newItemRef, setNewItemRef] = useState("");
  const [newItemSize, setNewItemSize] = useState("");
  const [newItemType, setNewItemType] = useState("");
  const [newItemCost, setNewItemCost] = useState("");
  const [newOrdered, setNewOrdered] = useState("");
  const [newSent, setNewSent] = useState("");
  const [newItemImage, setNewItemImage] = useState("");
  const [picURL, setPicURL] = useState("Nothing");
  const [editArray, setEditArray] = useState([
    { Order_Number: "No Order Selected" },
  ]);

  useEffect(
    function () {
      async function getEditID() {
        if (buttonID) {
          let { data: ToEdit, error } = await supabase
            .from("PreMade_Stock")
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

  async function uploadFile2(file) {
    const { data, error } = await supabase.storage
      .from("fabrics")
      .upload(`PreMadeItems/${newItemName}.png`, file);
    if (error) {
      console.log("Error in sending");
    } else {
      console.log("sending sucessful");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    async function updateItemName(newStockName) {
      const { data, error } = await supabase
        .from("PreMade_Stock")
        .update({ name: newStockName })
        .eq("id", buttonID);
    }
    async function updateItemDescription(newStockDesc) {
      const { data, error } = await supabase
        .from("PreMade_Stock")
        .update({ text: newStockDesc })
        .eq("id", buttonID);
    }
    async function updateItemRef(newItemRef) {
      const { data, error } = await supabase
        .from("PreMade_Stock")
        .update({ ref: newItemRef })
        .eq("id", buttonID);
    }
    async function updateItemSize(newItemSize) {
      const { data, error } = await supabase
        .from("PreMade_Stock")
        .update({ size: newItemSize })
        .eq("id", buttonID);
    }
    async function updateItemType(newItemType) {
      const { data, error } = await supabase
        .from("PreMade_Stock")
        .update({ type: newItemType })
        .eq("id", buttonID);
    }
    async function updateItemCost(newItemCost) {
      const { data, error } = await supabase
        .from("PreMade_Stock")
        .update({ cost: newItemCost })
        .eq("id", buttonID);
    }
    async function updateItemOrder(newItemOrder) {
      const { data, error } = await supabase
        .from("PreMade_Stock")
        .update({ ordered: newItemOrder })
        .eq("id", buttonID);
    }
    async function updateItemSent(newItemSent) {
      const { data, error } = await supabase
        .from("PreMade_Stock")
        .update({ sent: newItemSent })
        .eq("id", buttonID);
    }

    async function updateItemImage() {
      const { data: Purl } = supabase.storage
        .from("fabrics")
        .getPublicUrl(`PreMadeItems/${newItemName}.png`);

      var pictureUrl1 = Purl.publicUrl;

      const { data, error } = await supabase
        .from("PreMade_Stock")
        .update({ Picture: pictureUrl1 })
        .eq("id", buttonID);
    }

    if (newItemName) {
      updateItemName(newItemName);
    }
    if (newItemText) {
      updateItemDescription(newItemText);
    }
    if (newItemRef) {
      updateItemRef(newItemRef);
    }
    if (newItemSize) {
      updateItemSize(newItemSize);
    }
    if (newItemType) {
      updateItemType(newItemType);
    }
    if (newItemCost) {
      updateItemCost(newItemCost);
    }
    if (newOrdered) {
      updateItemOrder(newOrdered);
    }
    if (newSent) {
      updateItemSent(newSent);
    }
    if (newItemImage) {
      uploadFile2(newItemImage);
      //   getPicURL();
      updateItemImage();
    }
    setEditFormPMStock((show) => !show);
  }

  return (
    <>
      <div className="EditStockForm">
        <h1 className="fabric-page-header"> Edit PreMade Stock</h1>

        <form className="stock-form" onSubmit={handleSubmit}>
          <label for="itemName">Name of Item</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            maxLength="20"
            placeholder={editArray[0].name}
            onChange={(e) => setNewItemName(e.target.value)}
          ></input>
          <label for="text">Add Text Description</label>
          <textarea
            name="text"
            id="text"
            rows="3"
            cols="75"
            maxLength="100"
            placeholder={editArray[0].text}
            onChange={(e) => setNewItemText(e.target.value)}
          ></textarea>
          <label for="newRef">Reference</label>
          <input
            type="text"
            name="newRef"
            id="newRef"
            placeholder={editArray[0].ref}
            onChange={(e) => setNewItemRef(e.target.value)}
          ></input>
          <label for="newSize">Size</label>
          <input
            type="text"
            name="newSize"
            id="newSize"
            placeholder={editArray[0].size}
            onChange={(e) => setNewItemSize(e.target.value)}
          ></input>
          <label for="newType">Type</label>
          <input
            type="text"
            name="newType"
            id="newType"
            placeholder={editArray[0].type}
            onChange={(e) => setNewItemType(e.target.value)}
          ></input>
          <label for="newCost">Price</label>
          <input
            type="number"
            name="newCost"
            id="newCost"
            min="0"
            placeholder={editArray[0].cost}
            onChange={(e) => setNewItemCost(e.target.value)}
          ></input>
          <label for="editOrdered"> Item Ordered? </label>
          <select
            name="editOrdered"
            onChange={(e) => setNewOrdered(e.target.value)}
          >
            <option hidden disabled selected vlaue={editArray[0].ordered}>
              {editArray[0].ordered}
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label for="editSent"> Item Sent? </label>
          <select name="editSent" onChange={(e) => setNewSent(e.target.value)}>
            <option hidden disabled selected vlaue={editArray[0].sent}>
              {editArray[0].sent}
            </option>
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
              setNewItemImage(file);
            }}
          ></input>
          <button className="btn">Submit</button>
        </form>
        <button
          className="stockbtn"
          onClick={() => {
            setEditFormPMStock((show) => !show);
          }}
        >
          Cancel
        </button>
        <button
          onClick={async () => {
            const repon = window.confirm("Are You Sure");
            if (repon) {
              const { data, error } = await supabase
                .from("PreMade_Stock")
                .delete()
                .eq("id", buttonID);

              console.log("deleting", buttonID);
              setEditFormPMStock((show) => !show);
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
