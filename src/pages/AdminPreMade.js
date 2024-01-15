import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../componets/supabase";
import GetPMStock from "../componets/GetPMStock";
import AddPMStockForm from "../componets/AddPMStockForm";
import EditPMStockForm from "../componets/EditPMStockForm";

export default function AdminPreMade({ token }) {
  const [pmStockList, setPMStockList] = useState([]);
  const [buttonID, setButtonID] = useState("");
  const [showFormPMStock, setShowFormPMStock] = useState(false);
  const [editFormPMStock, setEditFormPMStock] = useState(false);

  useEffect(function () {
    async function getPMStockList() {
      let { data: Stock, error } = await supabase
        .from("PreMade_Stock")
        .select("*");

      setPMStockList(Stock);
    }

    getPMStockList();
  }, []);

  const navigate = useNavigate();

  useEffect(function () {
    console.log(token);
    if (!token) {
      navigate("/adminLogin");
    }
  }, []);

  return (
    <>
      <h2> Admin Premade Stock Page </h2>

      <Link to="/adminHome">
        <button className="admin-btn-home">Admin Home</button>
      </Link>
      <div className="stockTableHeading">
        <span className="stockHeading">PreMade Stock List</span>
        <button
          className="addPMStock"
          onClick={() => {
            setShowFormPMStock((show) => !show);
            setEditFormPMStock(false);
          }}
        >
          Add Stock
        </button>
      </div>

      <GetPMStock
        pmStockList={pmStockList}
        setButtonID={setButtonID}
        setEditFormPMStock={setEditFormPMStock}
        setShowFormPMStock={setShowFormPMStock}
      />
      {showFormPMStock ? (
        <AddPMStockForm
          setShowFormPMStock={setShowFormPMStock}
          showFormPMStock={showFormPMStock}
        />
      ) : null}
      {editFormPMStock ? (
        <EditPMStockForm
          setEditFormPMStock={setEditFormPMStock}
          buttonID={buttonID}
        />
      ) : null}
    </>
  );
}
