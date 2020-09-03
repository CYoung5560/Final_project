import React from "react";
import "./css/App.css";

export default class HowItWorks extends React.Component {
  render() {
    return (
      <div>
        <section class="jumbotron text-center">
          <div class="container">
            <h1>Booking</h1>
            {/* <p class="lead text-muted">Screen 1</p> */}
          </div>
        </section>

        <div class="container  backgroundColour marketing">
          <div class="row">
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img square"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>
              <h2>Choose a movie</h2>
              <p>
                Choose a movie for one of our two screens. We love movies and we
                know you do to! We change our movies every two weeks, so there's
                plenty of time to book a ticket!
              </p>
              <p>
                <a class="btn btn-secondary" href="./gallery" role="button">
                  View movies &raquo;
                </a>
              </p>
            </div>
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img square"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>
              <h2>Buy a ticket</h2>
              <p>
                Our ticket ordering system is simple to use. Just choose the
                date, and relevant time slot and with our patented MW
                authenticated system, it's as easy as 1, 2, 3!
              </p>
              <p>
                <a class="btn btn-secondary" href="./tickets" role="button">
                  Book tickets &raquo;
                </a>
              </p>
            </div>
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img square"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>
              <h2>VIP your email</h2>
              <p>
                Once you've ordered your ticket and your purchase has been
                authorised, you will be sent an email - keep it safe, it makes
                things easier when you get here!
              </p>
            </div>
          </div>
          <hr class="featurette-divider" />
            
          <section class="jumbotron text-center">
          <div class="container">
            <h1>When you get here ... </h1>
            {/* <p class="lead text-muted">Screen 1</p> */}
          </div>
        </section>

          <hr class="featurette-divider" />

          <div class="row">
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img square"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>
              <h2>At the cinema</h2>
              <p>
                You will be greeted by one of our friendly movie hosts who will guide you
                to your parking spot, where they will give you a menu and if you need it, a
                Qa Drive In radio.
              </p>
              
            </div>
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img square"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>
              <h2>Order some food</h2>
              <p>
                Once you're ready to order, turn on your sidelights and one of our friendly team
                will take your order and then it's just a short wait for your food and drinks to arrive.
              </p>
             
            </div>
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img square"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>
              <h2>Sit back and enjoy</h2>
              <p>
                Now you're all set to enjoy our amazing movie experience, so sit back, relax and enjoy!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
