import React from "react";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import Contact from "./Contact";

import Footer from "./Footer";
import "./App.css";
import Scripts from "./Scripts";
export default function Home() {
  const scripts = Scripts();

  return (
    <div>
      <div className=" container header mt-5">
        <div>
          <Navbar />
        </div>

        <main>
          <div className="row">
            <div className="col-6">
              <h2>Hey, there</h2>
              <div className="home-body">
                I'm a creative YouTube scriptwriter that create engaging,
                informative, and entertaining stories for content creators in
                diverse niches.Want to create content that will keep your
                viewers engaged and interested till the last second? You're in
                the right place!
              </div>
            </div>
          </div>
        </main>

        <section>
          <hr />
          <div className="glimpse">A glimpse into my work</div>
          <p className="detailed">
            For detailed look, check out my
            <Link to="/portfolio" className="portfolio-two">
              {" "}
              portfolio
            </Link>
          </p>
        </section>

        <header>
          <div className="row mt-5 project-description">
            <div className="col"></div>

            <div className="col">{scripts[0].image}</div>
            <div className="col script-title">
              {scripts[0].title}
              <p className="text-muted">{scripts[0].category}</p>
            </div>
            <div className="col"></div>
          </div>

          <div className="row mt-5">
            <div className="col-3"></div>

            <div className="col-3">{scripts[1].image}</div>
            <div className="col-5 script-title-one">
              {scripts[1].title}
              <p className="text-muted">{scripts[1].category}</p>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row mt-5">
            <div className="col-3"></div>
            <div className="col-3">{scripts[2].image}</div>

            <div className="col-5 script-title">
              {scripts[2].title}
              <p className="text-muted ">{scripts[2].category}</p>
            </div>
            <div className="col-3"></div>
          </div>

          <div className="row mt-5">
            <div className="col-3"></div>
            <div className="col-3">{scripts[3].image}</div>

            <div className="col-5 script-title-one">
              {scripts[3].title}
              <p className="text-muted ">{scripts[3].category}</p>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row mt-5">
            <div className="col-3"></div>
            <div className="col-3">{scripts[4].image}</div>

            <div className="col-5 script-title">
              {scripts[4].title}
              <p className="text-muted ">{scripts[4].category}</p>
            </div>
            <div className="col-3"></div>
          </div>

          <div className="row mt-5">
            <div className="col-3"></div>
            <div className="col-3">{scripts[5].image}</div>

            <div className="col-5 script-title-one">
              {scripts[5].title}
              <p className="text-muted ">{scripts[5].category}</p>
            </div>
            <div className="col-3"></div>
          </div>
        </header>

        <hr />
        <main>
          <div className="row">
            <div className="col-5">
              <h5 className="reviews">Scriptwriter for Explainer videos </h5>

              <span className="five-star">
                <i class="fa-solid fa-star"></i>{" "}
                <i class="fa-solid fa-star"></i>{" "}
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <p className="review-body">
                "Great work by this freelancer, it is super easy to communicate
                with him and his quality of work is 5 star. WIll work with him
                on more projects."{" "}
                <span className="client-name"> Gerry Regie, Upwork </span>
              </p>
            </div>

            <div className="col-5">
              <h5 className="reviews">
                Scriptwriter for Documentary/Educational{" "}
              </h5>

              <span className="five-star">
                <i class="fa-solid fa-star"></i>{" "}
                <i class="fa-solid fa-star"></i>{" "}
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </span>
              <p className="review-body">
                <span className="client-name"> Rae Boyce, Upwork </span>
              </p>
            </div>
          </div>
        </main>
      </div>

      <div className="mt-5">
        <div className="contact-box container d-flex justify-content-between mb-5 d-none d-md-flex">
          <div>
            <h4>Work Inquiry</h4>
            <p className="text-muted">
              {" "}
              Looks like what you're looking for? Let's get to work!
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="btn btn-branding mt-3"
              title="Contact Uthmaan Adetunji"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
