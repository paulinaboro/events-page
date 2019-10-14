// import React, { useState } from "react";
// import React from "react";
import React, { Component } from "react";
// import SingleEvent from "../components/Event.js";
import Filter from "./Filter";
import GoogleMap from "../components/Map";
// import "../css/event.css";
import "../css/grid.css";
// import SingleEvent from "../SingleEvent";
import DataFetching from "./DataFetching";

// export function Main() {
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      mapLat: 56.0377711,
      mapLon: 12.6141173
    };
    this.handleMap = this.handleMap.bind(this);
  }

  handleMap = event => {
    this.setState({
      mapLat: event.target.getAttribute("data-lat"),
      mapLon: event.target.getAttribute("data-lon")
    });
  };

  //   const allEventsUrl = "https://valuer-jenkins.duckdns.org/api/events/startups";
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 col-filter">
            <Filter />
          </div>
          <div className="col s6 col-events">
            <DataFetching handleMap={this.handleMap} />
          </div>
          <div className="col s6 col-map">
            <GoogleMap mapLat={this.state.mapLat} mapLon={this.state.mapLon} />
          </div>
        </div>
      </div>
    );
  }
}
