import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';
import './map.css';
import '../css/App.css';

import CurrentLocation from './CurrentLocation';

export class MapContainer extends Component {
 
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
      };
    
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
    
      onClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      };
    
      render() {
        return (
            <div className="google-map">
            <Map
            google={this.props.google}
            zoom={14}
            
            initialCenter={{ lat: 53.4747, lng: -2.2860 }}
          
          >
            <Marker
              onClick={this.onMarkerClick}
              name={'QA Drive In'}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
          </div>
        );
      }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBzJp0I75xJnD0gaubNemIiN3pXD_8nsVM'
})(MapContainer);