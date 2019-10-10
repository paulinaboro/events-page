// import React, { useState } from "react";
import React from "react";
// import SingleEvent from "../components/Event.js";
import Filter from "./Filter";
import Map from "../components/Map";
// import "../css/event.css";
import "../css/grid.css";
// import SingleEvent from "../SingleEvent";
import DataFetching from "./DataFetching";

export function Main() {
  //   const allEventsUrl = "https://valuer-jenkins.duckdns.org/api/events/startups";

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 col-filter">
          <Filter />
        </div>
        <div className="col s6 col-events">
          <DataFetching />
        </div>
        <div className="col s6 col-map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Main;
