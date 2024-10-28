import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="d-flex justify-content-between">
        <h2>
          <a href="/" className="header-two">
            UTHMAAN ADETUNJI
          </a>
        </h2>

        <ul className="top-menu">
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/portfolio" className="portfolio">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
