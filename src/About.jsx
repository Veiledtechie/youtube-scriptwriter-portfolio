import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";
export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div>
          <Navbar />
        </div>

        <main>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <h3 className="about-heading">About</h3>
              <p className="about-body">
                Hello, I'm Uthmaan Adetunji. I am an experienced YouTube
                scriptwriter with a reputation of creating compelling and
                informative YouTube scripts for diverse channel. Over the years,
                I have collaborated with numerous content creators to deliver{" "}
                {""}
                <strong>top-notch</strong> {""}
                content for their YouTube channels.
              </p>
              <p className="about-body">
                Within my service, I offer:{" "}
                <span className="about-offers">
                  Expertise in a wide range of topics, Tailored content for your
                  channel, Engaging storytelling, Research prowess, On-time
                  delivery, Collaborative spirit, and Review till you're
                  satisfied.
                </span>
              </p>
            </div>
            <div className="col-3"></div>
          </div>
        </main>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
