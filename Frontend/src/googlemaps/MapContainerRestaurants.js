import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker} from "google-maps-react";

import "./map.css";
import "../css/App.css";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    restaurant: [{latitude: 53.471299, longitude: -2.294259},
                {latitude: 53.473464, longitude: -2.298733},
                {latitude: 53.470689, longitude: -2.293999},
                {latitude: 53.471486, longitude: -2.288042},
                ]
      
  };

  displayMarkers = () => {
    return this.state.restaurant.map((restaurant, index) => {
      return <Marker key={index} id={index} position={{
       lat: restaurant.latitude,
       lng: restaurant.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
  const coords = { lat: 53.4747, lng: -2.286 };
    return (
      <div className="google-map">
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={coords}
          style={{width: 350, height: 350, position: 'relative'}}
        >
          <Marker onClick={this.onMarkerClick} name={"QA Drive In"} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
          {this.displayMarkers()}

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBzJp0I75xJnD0gaubNemIiN3pXD_8nsVM",
})(MapContainer);
