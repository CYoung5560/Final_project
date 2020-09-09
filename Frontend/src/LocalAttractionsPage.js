import React from "react";
import "./css/App.css";
import { Container } from "react-bootstrap";

import MapRestaurants from './googlemaps/MapContainerRestaurants';
import MapAttractions from './googlemaps/MapContainerAttractions';

export default class LocalAttractions extends React.Component {
  render() {
    return (
      <div>
        <Container className="cntr_main_qacinema">
        <div class="container  backgroundColour marketing">
          <h1>Local Attractions</h1>
          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h4 class="featurette-heading">
                The Quays...
                <span class="text-muted">Restaurants</span>
              </h4>
             <p class="lead">There are loads of restaurants to choose from
              around The Quays and we've marked a few of our favourites on Google Maps.</p>
            </div>
            <div class="col-md-5">
             <MapRestaurants/>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h4 class="featurette-heading">
                Local Attractions...
                <span class="text-muted">What's nearby</span>
              </h4>
              <p class="lead">Wow! You could make it a lovely day out here at the Quays, there's 
              plenty to see and what better way to top off your day than with a drive-in movie! Superb!</p>
            </div>
            <div class="col-md-5 order-md-1">
              
            <MapAttractions/>
            
            </div>
          </div>

          <hr class="featurette-divider" />

          </div>
        </Container>
      </div>
    );
  }
}
