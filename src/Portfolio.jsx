import React from "react";
import Scripts from "./Scripts";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Portfolio() {
  const scriptsOne = Scripts();

  return (
    <div>
      <div className=" container header mt-5">
        <Navbar />;
        {scriptsOne.map((script) => (
          <div className="row mt-5">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <span className="img-fluid">{script.image}</span>
            </div>
            <div className="col-md-5 script-title">
              {script.title}
              <p className="text-muted">{script.category}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
