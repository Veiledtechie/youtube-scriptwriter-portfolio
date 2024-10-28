import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";
export default function Contact() {
  return (
    <div>
      <div className=" container header mt-5">
        <Navbar />
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-5">
            <h2>Contact</h2>
            <div>
              If you would like to contact me, you can reach out to me on my
              email at{" "}
              <a
                href="
    mailto:tunjiadetunji95@gmail.com"
              >
                tunjiadetunji95@gmail.com.
              </a>{" "}
              I'll respond to your message(s) within reasonable minutes.
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}
