import React, { useState, useEffect } from "react";
import supabase from "../componets/supabase";
import { Link, useNavigate } from "react-router-dom";
import GetCompleteTable from "../componets/GetCompleteTable";
import GetIncompleteTable from "../componets/GetIncompleteTable";
import EditForm from "../componets/EditForm";
import ManualOrderForm from "../componets/ManualOrderForm";

export default function AdminOrders({ token }) {
  const [incompleteOr, setIncompleteOrs] = useState(["brown"]);
  const [completeOr, setCompleteOrs] = useState([]);
  const [refresh, setRefresh] = useState("0");
  const [showFormOrder, setShowFormOrder] = useState(false);
  const [buttonID, setButtonID] = useState("");
  const [showFormManual, setShowFormManual] = useState(false);

  useEffect(function () {
    async function getIncomplete() {
      let { data: Orders, error } = await supabase
        .from("Orders")
        .select("*")
        .eq("Complete", "No");

      setIncompleteOrs(Orders);
    }
    async function getComplete() {
      let { data: Orders1, error } = await supabase
        .from("Orders")
        .select("*")
        .eq("Complete", "Yes");

      setCompleteOrs(Orders1);
    }
    getIncomplete();
    getComplete();
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
      <div className="adminOrderHead">
        <h2> Admin Orders </h2>

        <Link to="/adminHome">
          <button className="admin-btn-home">ADMIN HOME</button>
        </Link>
      </div>
      <h3 className="OrdersHeading">Current Orders</h3>
      <GetIncompleteTable
        incompleteOr={incompleteOr}
        setButtonID={setButtonID}
        setShowFormOrder={setShowFormOrder}
        setShowFormManual={setShowFormManual}
      />
      <h3 className="OrdersHeading">Complete Orders</h3>
      <GetCompleteTable
        completeOr={completeOr}
        setButtonID={setButtonID}
        setShowFormOrder={setShowFormOrder}
        setShowFormManual={setShowFormManual}
      />
      <button
        onClick={() => {
          setShowFormManual((show) => !show);
          setShowFormOrder(false);
        }}
      >
        New Order
      </button>
      {showFormOrder ? (
        <EditForm
          setShowFormOrder={setShowFormOrder}
          showFormOrder={showFormOrder}
          buttonID={buttonID}
        />
      ) : null}
      {showFormManual ? (
        <ManualOrderForm
          setShowFormOrder={setShowFormOrder}
          setShowFormManual={setShowFormManual}
        />
      ) : null}
    </>
  );
}
