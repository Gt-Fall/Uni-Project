import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../componets/supabase";

export default function AdminLogin({ setToken }) {
  const [adminID, setAdminID] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [details, setDetails] = useState([]);

  const navigate = useNavigate();

  useEffect(function () {
    async function getSecurity() {
      const { data: detailed, error } = await supabase
        .from("Security")
        .select("*");
      setDetails(detailed);
    }
    getSecurity();
  }, []);

  function handleSubmit() {
    if (
      details[0].Admin_User === adminID &&
      adminPassword === details[0].Password
    ) {
      setToken(true);
      navigate("/adminHome");
    } else {
      alert("Incorrect Details");
    }
  }

  return (
    <>
      <h2>Admin Login</h2>
      <form className="admin-Login" onSubmit={handleSubmit}>
        <label for="AdminID">Admin ID: </label>
        <input
          type="text"
          id="AdminID"
          name="AdminID"
          placeholder="Enter Admin ID"
          maxLength="15"
          onChange={(e) => setAdminID(e.target.value)}
        ></input>

        <label for="AdminPW">Password: </label>
        <input
          type="password"
          id="AdminPW"
          name="AdminPW"
          placeholder="Enter Admin Password"
          maxLength="15"
          onChange={(e) => setAdminPassword(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}
