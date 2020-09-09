import React from "react";
import "./css/App.css";
import { Container } from "react-bootstrap";
import MapContainer from "./googlemaps/MapContainerCinema";

export default class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <Container className="cntr_main_qacinema">
        <div class="container  backgroundColour marketing">
          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h4 class="featurette-heading">
                Our address...
                <span class="text-muted">Find us on the quay!</span>
              </h4>
              <p class="lead">
                Anchorage 1 <br/>
                Anchorage Quay Salford,<br/> 
                The Quays, <br/>
                Manchester <br/>
                M50 3YJ <br/>
              </p>
            </div>
            <div class="col-md-5">
              <img
                alt="QA DriveIn front view"
                src={require("./images/externalDriveIn_500px.jpg")}
                width="100%"
                height="100%"
                class="img-responsive"
              ></img>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h4 class="featurette-heading">
                Directions...
                <span class="text-muted">How to get to us by public transport</span>
              </h4>
              <p class="lead">
                <a href="https://tfgm.com/public-transport/tram/stops/anchorage-tram" target="_blank">Get here by tram</a><br/>
                <a href="https://tfgm.com/public-transport/bus" target="_blank">Get here by bus</a><br/>
                <a href="https://www.nationalrail.co.uk/stations_destinations/247895.aspx" target="_blank">Get here by train</a><br/>
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              
                <img
                alt="Down town public transport"
                src={require("./images/downtown_500px.jpg")}
                width="100%"
                height="100%"
                class="img-responsive"
              ></img>
            
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h4 class="featurette-heading">
                
                Sat Nav Savvy...
                <span class="text-muted">
                  
                  Find us on Google Maps!
                </span>
              </h4>
              <p class="lead">
                Sat Nav Postcode:M50 3YJ
              </p>
            </div>
            <div class="col-md-5">
              <div class="col-md-11">
              <MapContainer/>
              </div>
              <div class="col-md-1"></div>
            </div>
          </div>

          <hr class="featurette-divider"></hr>
        </div>
        </Container>
      </div>
    );
  }
}
