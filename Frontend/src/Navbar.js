import React, { useState } from "react";

import "./css/App.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  Redirect
} from "react-router-dom";

import Gallery from "./NowShowingGalleryPage";
import NewReleases from "./NewReleasesGalleryPage";
//import Login from "./LoginPage";
import Signup from "./SignupPage";
import Contact from "./ContactPage";
import Home from "./HomePage";
import FindUs from "./FindUsPage";
import How from "./HowItWorksPage";
import Ticket from "./TicketPage";
import Attractions from "./LocalAttractionsPage";
import About from './AboutPage';
import Admin from './AdminPage';
import Ratings from './FilmRatingsPage';
import LoginModal from './LoginPageModal';
import MovieComponent from './MovieComponent'
import DiscussionBoard from './DiscussionBoard';

import { getToken } from './utils/token';
import MovieView from "./MovieView";

const logoStyle = {
  height: "150px",
  width: "150px",
};

// Nav bar component
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      //gMovieTitle: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {

    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Clicked!" , this.state.value); 
     
    window.location = `http://localhost:3000/individual/${this.state.value}`;
  
  }

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
              <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gallery">Now Showing</Nav.Link>
              <Nav.Link href="/tickets">Tickets</Nav.Link>
              <Nav.Link href="/how">How It Works</Nav.Link>

              {/* <Nav.Link href="/login">Login</Nav.Link>*/}
              {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
              {/* Dropdown */}
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/newreleases">New Releases</NavDropdown.Item>
                <NavDropdown.Item href="/findus">Find Us</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="/localattractions">Local Attractions</NavDropdown.Item>
                <NavDropdown.Item href="/filmratings">Film Ratings</NavDropdown.Item>
              </NavDropdown>
              {/* Dropdown */}
            </Nav>
            {/* Search bar */}
            <LoginModal />
            <Form inline onSubmit={this.handleSubmit}>
              
              <Button variant="outline-success" size="sm" className="btn-qacinema"><strong>Logout</strong></Button>
              <input type="text" value={this.state.value} onChange={this.handleChange} />

              <input className="btn-qacinema" type="submit" value="Submit" />
            </Form>
            {/* Search bar */}
          </Navbar.Collapse>
        </Navbar>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/" component={About} />
          <Route exact path="/gallery/" component={Gallery} />
          <Route exact path="/newreleases/" component={NewReleases} />
          {/* <Route exact path="/login/" component={LoginPage} /> */}
          <Route exact path="/signup/" component={Signup} />
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/findus/" component={FindUs} />
          <Route exact path="/how/" component={How} />
          <Route exact path="/localattractions/" component={Attractions} />
          <Route exact path="/tickets/" component={Ticket} />
          <Route exact path="/filmratings/" component={Ratings} />
          <Route path="/individual/:movieName" children={<MovieView />} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter >
    );
  }
}