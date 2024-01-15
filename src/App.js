//To run - npm run start - This opens in chrome browser

import React, { useState, useEffect } from "react";
import supabase from "./componets/supabase";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Fabrics from "./pages/Fabrics";
import NoPage from "./pages/NoPage";
import Title from "./componets/TitleHeader";
import Footer from "./componets/Footer";
import Basket from "./pages/Basket";
import AdminHome from "./pages/AdminHome";
import AdminOrders from "./pages/AdminOrders";
import AdminStock from "./pages/AdminStock";
import Premade from "./pages/Premade";
import AdminPreMade from "./pages/AdminPreMade";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
  const [fabrics, setFabrics] = useState([]);
  const [showFormHood, setShowFormHood] = useState(false);
  const [showFormSnood, setShowFormSnood] = useState(false);
  const [basket, setBasket] = useState([]);
  const [incompleteOr, setIncompleteOrs] = useState([]);
  const [preMades, setPreMades] = useState([]);
  const [token, setToken] = useState(false);

  useEffect(function () {
    async function getFabric() {
      const { data: Stock, error } = await supabase.from("Stock").select("*");
      setFabrics(Stock);
    }
    getFabric();
    async function getPreMades() {
      const { data: PreStock, error } = await supabase
        .from("PreMade_Stock")
        .select("*");
      setPreMades(PreStock);
    }
    getPreMades();
  }, []);

  return (
    <>
      <Title />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="products" element={<Products />} />

          <Route
            path="fabrics"
            element={
              <Fabrics
                fabrics={fabrics}
                setFabrics={setFabrics}
                showFormHood={showFormHood}
                setShowFormHood={setShowFormHood}
                showFormSnood={showFormSnood}
                setShowFormSnood={setShowFormSnood}
                setBasket={setBasket}
                basket={basket}
              />
            }
          />

          <Route path="preMade" element={<Premade preMades={preMades} />} />

          <Route
            path="basket"
            element={
              <Basket
                basket={basket}
                setBasket={setBasket}
                fabrics={fabrics}
                setBasket={setBasket}
              />
            }
          />

          <Route
            path="adminLogin"
            element={<AdminLogin setToken={setToken} />}
          />

          <Route
            path="adminHome"
            element={<AdminHome token={token} setToken={setToken} />}
          />

          <Route path="adminOrder" element={<AdminOrders token={token} />} />

          <Route path="adminStock" element={<AdminStock token={token} />} />

          <Route path="adminPreMade" element={<AdminPreMade token={token} />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}
