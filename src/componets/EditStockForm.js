import supabase from "./supabase";
import { useState, useEffect } from "react";

export default function EditStockForm({
  setEditFormStock,
  editFormStock,
  buttonID,
}) {
  const [newFabName, setNewFabName] = useState("");
  const [newFabText, setNewFabText] = useState("");
  const [newFabStock, setNewFabStock] = useState("");
  const [newFabReserved, setNewFabReserved] = useState("");
  const [newFabImage, setNewFabImage] = useState("");
  const [picURL, setPicURL] = useState("Nothing");
  const [editArray, setEditArray] = useState([
    { Order_Number: "No Order Selected" },
  ]);

  useEffect(
    function () {
      async function getEditID() {
        if (buttonID) {
          let { data: ToEdit, error } = await supabase
            .from("Stock")
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

  async function uploadFile(file) {
    const { data, error } = await supabase.storage
      .from("fabrics")
      .upload(`siteFabrics/${newFabName}.png`, file);
    if (error) {
      console.log("Error in sending");
    } else {
      console.log("sending sucessful");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Uploading:", newFabName, newFabText, newFabStock, newFabImage);

    async function updateFabricName(newStockName) {
      const { data, error } = await supabase
        .from("Stock")
        .update({ name: newStockName })
        .eq("id", buttonID);
    }
    async function updateFabricDescription(newStockDesc) {
      const { data, error } = await supabase
        .from("Stock")
        .update({ text: newStockDesc })
        .eq("id", buttonID);
    }
    async function updateFabricStock(newStockLevel) {
      const { data, error } = await supabase
        .from("Stock")
        .update({ in_stock: newStockLevel })
        .eq("id", buttonID);
    }
    async function updateFabricReserved(newReservedLevel) {
      const { data, error } = await supabase
        .from("Stock")
        .update({ reserved: newReservedLevel })
        .eq("id", buttonID);
    }

    async function updateFabricImage() {
      const { data: Purl } = supabase.storage
        .from("fabrics")
        .getPublicUrl(`siteFabrics/${newFabName}.png`);

      var pictureUrl = Purl.publicUrl;

      const { data, error } = await supabase
        .from("Stock")
        .update({ photo: pictureUrl })
        .eq("id", buttonID);
    }

    if (newFabName) {
      updateFabricName(newFabName);
    }
    if (newFabText) {
      updateFabricDescription(newFabText);
    }
    if (newFabStock) {
      updateFabricStock(newFabStock);
    }
    if (newFabReserved) {
      updateFabricReserved(newFabReserved);
    }
    if (newFabImage) {
      uploadFile(newFabImage);
      //   getPicURL();
      updateFabricImage();
    }
    setEditFormStock((show) => !show);
  }

  return (
    <>
      <div className="EditStockForm">
        <h1 className="fabric-page-header"> Edit Stock</h1>

        <form className="stock-form" onSubmit={handleSubmit}>
          <label for="fabName">Name of Fabric</label>
          <input
            type="text"
            id="fabName"
            name="fabName"
            maxLength="15"
            placeholder={editArray[0].name}
            onChange={(e) => setNewFabName(e.target.value)}
          ></input>
          <label for="text">Add Text Description</label>
          <textarea
            name="text"
            id="text"
            rows="3"
            cols="75"
            maxLength="80"
            placeholder={editArray[0].text}
            onChange={(e) => setNewFabText(e.target.value)}
          ></textarea>
          <label for="inStock">Meters In Stock</label>
          <input
            type="number"
            name="inStock"
            id="inStock"
            min="0"
            placeholder={editArray[0].in_stock}
            onChange={(e) => setNewFabStock(e.target.value)}
          ></input>
          <label for="reserved">Meters Reserved</label>
          <input
            type="number"
            name="reserved"
            id="reserved"
            min="0"
            placeholder={editArray[0].reserved}
            onChange={(e) => setNewFabReserved(e.target.value)}
          ></input>
          <label for="image_input">Add a Photo</label>
          <input
            type="file"
            id="image_input"
            name="image_input"
            accept="image/png, image/jpeg"
            onChange={(event) => {
              let file = event.target.files[0];
              setNewFabImage(file);
            }}
          ></input>
          <button className="btn">Submit</button>
        </form>
        <button
          className="stockbtn"
          onClick={() => {
            setEditFormStock((show) => !show);
          }}
        >
          Cancel
        </button>
        <button
          onClick={async () => {
            const repon = window.confirm("Are You Sure");
            if (repon) {
              const { data, error } = await supabase
                .from("Stock")
                .delete()
                .eq("id", buttonID);

              console.log("deleting", buttonID);
              setEditFormStock((show) => !show);
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
