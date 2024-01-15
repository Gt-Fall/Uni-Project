import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GetStock from "../componets/GetStock";
import AddStockForm from "../componets/AddStockForm";
import EditStockForm from "../componets/EditStockForm";
import supabase from "../componets/supabase";

export default function AdminStock({ token }) {
  const [stockList, setStockList] = useState([]);
  const [buttonID, setButtonID] = useState("");
  const [showFormStock, setShowFormStock] = useState(false);
  const [editFormStock, setEditFormStock] = useState(false);

  useEffect(function () {
    async function getStockList() {
      let { data: Stock, error } = await supabase.from("Stock").select("*");

      setStockList(Stock);
    }

    getStockList();
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
      <h2> Admin Stock page </h2>

      <Link to="/adminHome">
        <button className="admin-btn-home">Admin Home</button>
      </Link>

      <div className="stockTableHeading">
        <span className="stockHeading">Stock List</span>
        <button
          className="addStock"
          onClick={() => {
            setShowFormStock((show) => !show);
            setEditFormStock(false);
          }}
        >
          Add Stock
        </button>
      </div>

      <GetStock
        stockList={stockList}
        setButtonID={setButtonID}
        setEditFormStock={setEditFormStock}
        setShowFormStock={setShowFormStock}
      />

      {showFormStock ? (
        <AddStockForm
          setShowFormStock={setShowFormStock}
          showFormStock={showFormStock}
        />
      ) : null}

      {editFormStock ? (
        <EditStockForm
          setEditFormStock={setEditFormStock}
          editFormStock={editFormStock}
          buttonID={buttonID}
        />
      ) : null}
    </>
  );
}
