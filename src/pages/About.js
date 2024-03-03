import React from "react";
import about from "../assets/about.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";

function About() {
  return (
    <div>
      <Navbar />
      <Filters />
      <div
        className="row col-10 float-end me-1 d-flex align-content-center justify-content-center mb-5"
        style={{ marginTop: "4%" }}
      >
        <div className="w-75">
          <div className="my-5">
            <h1 className="fs-2">About Our Movie Recommendations App</h1>
          </div>
          <hr className="featurette-divider"></hr>
          <div class="row featurette">
            <div class="col-md-7 d-flex flex-column justify-content-center">
              <h2 class="featurette-heading fw-normal lh-1">
                Welcome to our Movie Recommendations App!{" "}
              </h2>
              <p class="lead fst-italic">
                We are passionate about helping you discover the best movies
                tailored to your preferences.
              </p>
            </div>
            <div class="col-md-5">
              <img
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                alt="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                src={about}
              />
            </div>
          </div>
          <hr className="featurette-divider"></hr>
          <div class="row featurette">
            <div class="col-md-7 order-md-2 d-flex flex-column justify-content-lg-center">
              <h2 class="featurette-heading fw-normal lh-1">Our Mission</h2>
              <p class="lead fst-italic">
                Our mission is to provide you with personalized movie
                recommendations based on your interests, ensuring you never miss
                out on great films.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                alt="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                src={about1}
              />
            </div>
          </div>
          <hr className="featurette-divider"></hr>
          <div class="row featurette">
            <div class="col-md-7 d-flex flex-column justify-content-lg-center">
              <h2 class="featurette-heading fw-normal lh-1">
                How It Works!{" "}
                <span class="text-body-secondary">It’ll blow your mind.</span>
              </h2>
              <p class="lead fst-italic">
                Our app uses advanced algorithms to analyze your movie
                preferences and suggest titles that we believe you'll enjoy. You
                can explore a wide range of genres and discover hidden gems in
                the world of cinema.
              </p>
            </div>
            <div class="col-md-5">
              <img
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                alt="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                src={about2}
              />
            </div>
          </div>
          <hr className="featurette-divider"></hr>

          <div class="px-4 py-5">
            <h2 class="featurette-heading fw-normal">Features</h2>

            <div class="row">
              <div className="col-3 d-flex gap-1">
                <p> →</p>
                <p className="lead fst-italic">
                  Personalized movie recommendations
                </p>
              </div>
              <div className="col-3 d-flex gap-1">
                <p> →</p>
                <p className="lead fst-italic">
                  Browse movies by genre, rating, and release date
                </p>
              </div>
              <div className="col-3 d-flex gap-1">
                <p> →</p>
                <p className="lead fst-italic">
                  Save your favorite movies for later
                </p>
              </div>
              <div className="col-3 d-flex gap-1">
                <p> →</p>
                <p className="lead fst-italic">
                  Stay up-to-date with the latest releases
                </p>
              </div>
            </div>
          </div>
          <hr className="featurette-divider"></hr>
          <div class="p-5 text-center bg-body-secondary rounded-3 mt-5 d-flex flex-column row-gap-5">
            <div>
              <h1 class="text-body-emphasis">Enjoy Your Movie Journey!</h1>
              <p class="lead">
                Thank you for choosing our Movie Recommendations App. We hope
                you enjoy exploring new movies and find the perfect ones to
                watch.
              </p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>
                We would love to hear from you! If you have any questions,
                feedback, or suggestions, please feel free to reach out to us at{" "}
                <a
                  href="mailto:info@example.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                  className="fst-italic fw-semibold"
                >
                  moviestar@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
