import React from "react";
import about from "../assets/about.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";

function About() {
  return (
    <div>
      <Navbar />
      <Filters />
      <div
        className="container marketing
    py-5"
      >
        <h2>About Our Movie Recommendations App</h2>
        <hr className="featurette-divider"></hr>
        <div class="row featurette">
          <div class="col-md-7 d-flex flex-column justify-content-lg-center">
            <h2 class="featurette-heading fw-normal lh-1">
              Welcome to our Movie Recommendations App!{" "}
            </h2>
            <p class="lead">
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
            <p class="lead">
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
            <p class="lead">
              Our app uses advanced algorithms to analyze your movie preferences
              and suggest titles that we believe you'll enjoy. You can explore a
              wide range of genres and discover hidden gems in the world of
              cinema.
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

        <div class="px-4 py-5" id="hanging-icons">
          <h2 class="pb-2 border-bottom">Features</h2>

          <div class="col d-flex align-items-start">
            <div>
              <li className="fs-4 text-body-emphasis">
                Personalized movie recommendations
              </li>
            </div>
            <div>
              <li className="fs-4 text-body-emphasis">
                Browse movies by genre, rating, and release date
              </li>
            </div>
            <div>
              <li className="fs-4 text-body-emphasis">
                Save your favorite movies for later
              </li>
            </div>
            <div>
              <li className="fs-4 text-body-emphasis">
                Stay up-to-date with the latest releases
              </li>
            </div>
          </div>
        </div>

        <div class="p-5 text-center bg-body-tertiary rounded-3 mt-5">
          <h1 class="text-body-emphasis">Enjoy Your Movie Journey!</h1>
          <p class="lead">
            Thank you for choosing our Movie Recommendations App. We hope you
            enjoy exploring new movies and find the perfect ones to watch.
          </p>
          <h3>Contact Us</h3>
          <p>
            We would love to hear from you! If you have any questions, feedback,
            or suggestions, please feel free to reach out to us at{" "}
            <a href="mailto:info@example.com">moviestar@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
