import React, { Component } from "react";
import Filter from "./Filter";
import GoogleMap from "../components/Map";
import "../css/grid.css";
import DataFetching from "./DataFetching";
// import { updateExpression } from "@babel/types";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      mapLat: 55.6114726,
      mapLon: 12.9942663
    };
    this.handleMap = this.handleMap.bind(this);
  }

  handleMap = event => {
    this.setState({
      mapLat: event.lat,
      mapLon: event.lon
    });
  };
  // };

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
