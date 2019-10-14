import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
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
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: this.props.mapLat, lng: this.props.mapLon }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATAjl2tOZUIErKORpG0OKsVSQuOxVbrO8"
})(GoogleMap);
