import React from "react";
import "./css/App.css";
import { Container } from "react-bootstrap";
import MapContainer from './googlemaps/MapContainerCinema';

export default class LocalAttractions extends React.Component {
  render() {
    return (
      <div>
        <Container className="cntr_main_qacinema">
        <div class="container  backgroundColour marketing">
          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h4 class="featurette-heading">
                The Quays...
                <span class="text-muted">Restaurants</span>
              </h4>
             
            </div>
            <div class="col-md-5">
             <MapContainer/>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h4 class="featurette-heading">
                Local Attractions...
                <span class="text-muted">What's new</span>
              </h4>
             
            </div>
            <div class="col-md-5 order-md-1">
              
            <MapContainer/>
            
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h4 class="featurette-heading">
                
               Tourist Information
                <span class="text-muted">
                  
                  Find out more while you're here.
                </span>
              </h4>
              <p class="lead">
                
              </p>
            </div>
            <div class="col-md-5">
            <MapContainer/>
            </div>
          </div>

          <hr class="featurette-divider"></hr>
        </div>
        </Container>
      </div>
    );
  }
}
