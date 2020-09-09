import React from "react";
import "./css/App.css";
import { Container, Row, Col } from "react-bootstrap";

export default class LocalAttractions extends React.Component {
  render() {
    return (
      <div>
        <Container className="cntr_main_qacinema">
          <br/>
            <Row>
              <Col></Col>
              <Col xs={9}>
                <a href="https://www.bbfc.co.uk/" target="_blank">
                <img
                  alt="BBFC header"
                  src={require("./images/ratingsHeader.png")}
                  width="100%"
                  height="100%"
                  class="img-responsive"
                ></img></a>
              </Col>
              <Col></Col>
              </Row>
              <br/>
              <Row>
              <Col></Col>
                <Col xs={9}>
              <img
                alt="BBFC main information"
                src={require("./images/ratingsPortrait_1000px.png")}
                width="100%"
                height="100%"
                class="img-responsive"
              ></img>
              </Col>
              <Col></Col>
              </Row>
              <br/>
              <Row>
              <Col></Col>
                <Col xs={9}>
              <img
                alt="BBFC main information"
                src={require("./images/ratingsFooter.jpg")}
                width="100%"
                height="100%"
                class="img-responsive"
              ></img>
              </Col>
              <Col></Col>
              </Row>
              <br/>
              <Row>
                <Col></Col>
                <Col xs={9}>
                  <h6>For more information please have a look at the <a href="https://www.bbfc.co.uk/" target="_blank" > BBFC </a>website.</h6>
                </Col>
                <Col></Col>
              </Row>
              <br/>
        </Container>
      </div>
    );
  }
}
