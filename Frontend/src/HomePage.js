import React from "react";
import "./css/App.css";
import { Container } from "react-bootstrap";
import Carousel from "./Carousel.js";


export default class Home extends React.Component {
  
  render() {
    return (
      
      <div>
        <Container className="cntr_main_qacinema">
        <br/>
        <Carousel/>
        <br/>
        </Container>
      </div>
    )
  }
}



