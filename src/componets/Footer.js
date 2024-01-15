import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/adminLogin" className="footer-link">
        Go to Admin Pages
      </Link>
    </div>
  );
}
