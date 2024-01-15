import supabase from "./supabase";
import { useState, useEffect } from "react";

export default function AddStockForm({ setShowFormStock, showFormStock }) {
  const [fabName, setFabName] = useState("");
  const [fabText, setFabText] = useState("");
  const [fabStock, setFabStock] = useState("");
  const [fabImage, setFabImage] = useState("");
  const [picURL, setPicURL] = useState("Nothing");

  useEffect(() => {
    console.log("IN UE The new url is: ", picURL);
  }, [picURL]);

  async function uploadFile(file) {
    const { data, error } = await supabase.storage
      .from("fabrics")
      .upload(`siteFabrics/${fabName}.png`, file);
    if (error) {
      console.log("Error in sending");
    } else {
      console.log("sending sucessful");
    }
  }

  async function uploadNewStock() {
    const { data: Purl } = supabase.storage
      .from("fabrics")
      .getPublicUrl(`siteFabrics/${fabName}.png`);

    var pictureUrl = Purl.publicUrl;

    const { data, error } = await supabase.from("Stock").insert([
      {
        name: fabName,
        text: fabText,
        photo: pictureUrl,
        in_stock: fabStock,
      },
    ]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Uploaded:", fabName, fabText, fabStock, fabImage);

    uploadFile(fabImage);
    uploadNewStock();

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
          <label for="fabName">Name of Fabric</label>
          <input
            type="text"
            id="fabName"
            name="fabName"
            required
            maxLength="15"
            placeholder="Max 15 characters"
            onChange={(e) => setFabName(e.target.value)}
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
            onChange={(e) => setFabText(e.target.value)}
          ></textarea>
          <label for="inStock">Meters In Stock</label>
          <input
            type="number"
            name="inStock"
            id="inStock"
            min="0"
            required
            onChange={(e) => setFabStock(e.target.value)}
          ></input>
          <label for="image_input">Add a Photo</label>
          <input
            type="file"
            id="image_input"
            name="image_input"
            accept="image/png, image/jpeg"
            onChange={(event) => {
              let file = event.target.files[0];
              setFabImage(file);
            }}
          ></input>
          <button className="btn">Submit</button>
        </form>
        <button
          className="stockbtn"
          onClick={() => {
            setShowFormStock((show) => !show);
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
