import React, { Component } from "react";
import sanitize from "striptags";
// import "js/materialize.min.js";
// import "materialize-js/dist/js/materialize.min.js";
// import M from "metronics";
import M from "materialize-css";
import "../css/event.css";
// import { functionTypeAnnotation } from "@babel/types";

export default class SingleEvent extends Component {
  //   let elems = document.querySelectorAll(".collapsible");
  componentDidMount() {
    // this.initMaterialize();
    // M.AutoInit();
    // console.log("componentDidMount");
    let elems = document.querySelectorAll(".collapsible");
    let instances = M.Collapsible.init(elems);
  }

  //var elem = document.querySelector('.tabs');

  initCol(event) {
    let clickedElement = event.target;

    if (clickedElement.hasAttribute("active")) {
      clickedElement.classList.remove("active");
    } else {
      clickedElement.classList.add("active");
    }
  }

  render() {
    const { events } = this.props;
    return (
      <ul>
        {" "}
        {events.map(event => {
          return (
            <div key={event._id} className="eventContainer">
              <div className="row">
                <h1 className="col s12 name">{event.name}</h1>
                {console.log("rednering")}
              </div>
              <div className="row">
                <img className="col s4 logo" alt="logo" src={event.logo} />
                <p className="col s8 address">{event.address}</p>
              </div>
              <div className="row">
                <ul
                  className="collapsible popout"
                  data-collapsible="expandable"
                >
                  <li>
                    <div className="collapsible-header" onClick={this.initCol}>
                      <i className="material-icons large">arrow_drop_down</i>
                      <p>More Info</p>
                    </div>
                    <div className="collapsible-body">
                      {/* using sanitize to remove all html tags */}
                      <p className="col s12">{sanitize(event.description)}</p>
                      <a href={event.url}>Go to event website to read more.</a>
                    </div>
                    {/* create comp container that holds lsit items comp to wrap items and comp to dynamically generate tose items  */}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}
