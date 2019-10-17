import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "../css/map.css";
// Maps API: AIzaSyATAjl2tOZUIErKORpG0OKsVSQuOxVbrO8

const mapStyles = {
  width: "40vw",
  height: "75vh"
};

export class GoogleMap extends Component {
  render() {
    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{
            lat: this.props.mapLat,
            lng: this.props.mapLon
            // lat: 56.0381844,
            // lng: 12.6985023
          }}
          center={{ lat: this.props.mapLat, lng: this.props.mapLon }}
          // position={{ lat: this.props.mapLat, lng: this.props.mapLon }}
        >
          <Marker
            zoom={15}
            position={{ lat: this.props.mapLat, lng: this.props.mapLon }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATAjl2tOZUIErKORpG0OKsVSQuOxVbrO8"
})(GoogleMap);
