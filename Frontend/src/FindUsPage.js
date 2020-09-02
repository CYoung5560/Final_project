import React from "react";
import "./App.css";
import "./signin.css";

export default class ContactUs extends React.Component {
  render() {
    return (
      <div>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.683115237455!2d-2.288300184730258!3d53.474123180005975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae15b3ea3473%3A0xa77a796c50c58beb!2sAnchorage!5e0!3m2!1sen!2suk!4v1599045129204!5m2!1sen!2suk" width="500" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>

          <hr class="featurette-divider"></hr>
        </div>
      </div>
    );
  }
}
