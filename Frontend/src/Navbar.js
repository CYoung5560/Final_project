import React from "react";
import "./css/App.css";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container } from 'react-bootstrap'

// npm install react-router-dom
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Gallery from "./NowShowingGalleryPage";
import NewReleases from "./NewReleasesGalleryPage";
import Login from "./LoginPage";
import Signup from "./SignupPage";
import Contact from "./ContactPage";
import Booking from "./BookingPage";
import Home from "./HomePage";
import FindUs from "./FindUsPage";
import How from "./HowItWorksPage";
import Ticket from "./TicketPage";
import Attractions from "./LocalAttractionsPage";

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

function TicketPage() {
  return <Ticket />;
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
export default class NavBar extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
   
        <Navbar expand="lg" variant="light" className="nv_qacinema">
        <Navbar.Brand href="#home"><a class="navbar-brand" href="/">
            <img
              src={require("./images/finalLogo_500px.png")}
              alt="QA logo 500px"
              style={logoStyle}
            />
          </a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gallery">Now Showing</Nav.Link>
              <Nav.Link href="/tickets">Tickets</Nav.Link>
              {/* <Nav.Link href="/login">Login</Nav.Link>*/}
              {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
              {/* <Nav.Link href="/booking">Booking</Nav.Link> */}
              {/* Dropdown */}
              <NavDropdown title="About" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                  <NavDropdown.Item href="/newreleases">New Releases</NavDropdown.Item>
                  <NavDropdown.Item href="/findus">Find Us</NavDropdown.Item>
                  <NavDropdown.Item href="/how">How It Works</NavDropdown.Item>
                  <NavDropdown.Item href="/localattractions">Local Attractions</NavDropdown.Item>            
              </NavDropdown>
              </Nav>
              {/* Search bar */}
              <Form inline>
                <Button variant="outline-success" size="sm" className="btn-qacinema">Login</Button>
                <Button variant="outline-success" size="sm" className="btn-qacinema">Logout</Button>
                <FormControl type="text" size="sm" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success" size="sm" className="btn-qacinema">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        

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
          <Route exact path="/localattractions/"component={LocalAttractionsPage}/>
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
