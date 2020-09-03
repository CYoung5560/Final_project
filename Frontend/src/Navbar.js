import React from "react";
import "./css/App.css";
import "./css/carousel.css";

// npm install react-router-dom
import {BrowserRouter,Switch,Route, Link,useParams,} from "react-router-dom";

import Gallery from "./NowShowingGalleryPage";
import NewReleases from "./NewReleasesGalleryPage";
import Login from "./LoginPage";
import Signup from "./SignupPage";
import Contact from "./ContactPage";
import Booking from "./BookingPage";
import Home from "./HomePage";
import FindUs from "./FindUsPage";
import How from "./HowItWorksPage";
import Ticket from './TicketPage';
import Attractions from './LocalAttractionsPage';

// import getToken from './utils/token';

function HomePage() {
  return <Home />;
}

function AboutusPage() {
  return <h1> About Page </h1>;
}

function GalleryPage() {
  return <Gallery />;
}

function NewReleasesPage() {
  return <NewReleases />;
}
// This is the component the router will return
// The return name matches with the import name
// The function name matches the route component name
function LoginPage() {
  return <Login />;
}

function SignupPage() {
  return <Signup />;
}

function ContactPage() {
  return <Contact />;
}

function FindUsPage() {
  return <FindUs />;
}

function TicketPage(){
  return <Ticket/>;
}

function HowItWorksPage() {
  return <How />;
}

function LocalAttractionsPage() {
  return <Attractions />;
}

function BookingPage() {
  return <Booking />;
}

const logoStyle = {
  height: "150px",
  width: "150px",
};

// Nav bar component
export default class Navbar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img
              src={require("./images/finalLogo_500px.png")}
              alt="QA logo 500px"
              style={logoStyle}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/">
                  <span class="navbar-brand mb-0 h1">Home</span>
                </Link>
              </li>
              {/* Dropdown */}
              <li class="nav-item">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="/about">
                      About Us
                    </a>
                    <a class="dropdown-item" href="/contact">
                      Contact Us
                    </a>
                    <a class="dropdown-item" href="/newreleases">
                      New Releases
                    </a>
                    <a class="dropdown-item" href="/findus">
                      Find Us
                    </a>
                    <a class="dropdown-item" href="/how">
                      How It Works
                    </a>
                    <a class="dropdown-item" href="/localattractions">
                      Local Attractions
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <Link to="/gallery">
                  <span class="navbar-brand mb-0 h1">Now Showing</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login">
                  <span class="navbar-brand mb-0 h1">Login</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/signup">
                  <span class="navbar-brand mb-0 h1">Signup</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/tickets">
                  <span class="navbar-brand mb-0 h1">Tickets</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/booking">
                  <span class="navbar-brand mb-0 h1">Booking</span>
                </Link>
              </li>
            </ul>
            {/* Search bar */}
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about/" component={AboutusPage} />
          <Route exact path="/gallery/" component={GalleryPage} />
          <Route exact path="/newreleases/" component={NewReleasesPage} />
          <Route exact path="/login/" component={LoginPage} />
          <Route exact path="/signup/" component={SignupPage} />
          <Route exact path="/contact/" component={ContactPage} />
          <Route exact path="/findus/" component={FindUsPage} />
          <Route exact path="/how/" component={HowItWorksPage} />
          <Route exact path="/localattractions/" component={LocalAttractionsPage} />
          <Route exact path="/tickets/" component={TicketPage} />
          <Route exact path="/booking/" component={BookingPage} />
          <Route path="/individual/:movieName" children={<Child />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

function Child() {
  let { movieName } = useParams();
  return (
    <div>
      <br />
      <br />
      <section class="jumbotron text-center">
        <div class="container">
          <h2>{movieName}!</h2>
        </div>
      </section>
      <div class="container  backgroundColour marketing">
        <hr class="featurette-divider"></hr>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Gremlins
              <span class="text-muted">
                So good you'll watch it 50 times or more.
              </span>
            </h2>
            <p class="lead">Some interesting things about gremlins...</p>
          </div>
          <div class="col-md-5">
            <img
              alt="Gremlins"
              src={require("./images/gremlins_500px.jpg")}
              width="100%"
              height="100%"
              class="img-responsive"
            ></img>
          </div>
        </div>
        <hr class="featurette-divider"></hr>
      </div>
      <br />
      <br />
      <section class="jumbotron text-center">
        <div class="container">
          <h2> Discussion Board</h2>
        </div>
      </section>
    </div>
  );
}
