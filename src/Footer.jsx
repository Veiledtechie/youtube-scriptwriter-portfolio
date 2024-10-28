import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="d-flex justify-content-space-between">
        <div>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
        <div>
          <Link to="/" className="link">
            Home
          </Link>
        </div>
        <div>
          <Link to="/portfolio" className="link">
            Portfolio
          </Link>
        </div>
      </div>
      <div className="copyright mt-5">Copyright © 2024 UTHMAAN ADETUNJI</div>
    </div>
  );
}
