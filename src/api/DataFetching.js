import React, { Component } from "react";
import axios from "axios";
import "../css/event.css";
// using sanitize to remove all html tags
import sanitize from "striptags";
import { hostname } from "os";

// local hostname:
// http://localhost:3500/test

// original url:
// https://valuer-jenkins.duckdns.org/api/events/startups

export default class DataFetching extends Component {
  state = {
    events: null
  };
  componentDidMount() {
    if (!this.state.events) {
      axios
        .get("http://localhost:3500/test")
        .then(res => {
          // console.log("data from api", res.data);
          this.setState({ events: JSON.parse(res.data) });
          //set state to loading false
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    console.log("state events", this.state.events);
    // create spinner component later on:
    // let eventsList = <Spinner name={this.state.name} />;
    let eventsList = null;
    //check if loasding is false than u can render elements
    // console.log(typeof eventsList);
    if (this.state.events) {
      //s version
      eventsList = this.state.events.map(event => (
        //here create component in the separate file
        <div key={event._id} className="eventContainer">
          <div className="row">
            <h1 className="col s12 name">{event.name}</h1>
          </div>
          <div className="row">
            <img className="col s4 logo" src={event.logo} />
            <p className="col s4">{event.address}</p>
          </div>
          <div className="row">
            <ul className="collapsible">
              More Info
              <li>
                {/* <div className="collapsible-header"> */}
                <i className="material-icons"></i>
                {/* </div> */}
                {/* <div className="collapsible-body"> */}
                {/* <span>Lorem ipsum dolor sit amet.</span> */}
                {/* using sanitize to remove all html tags */}
                <p className="col s12">{sanitize(event.description)}</p>
                <a src={event.url}>Go to event website to read more.</a>
                {/* </div> */}
                {/* create comp container that holds lsit items comp to wrap items and comp to dynamically generate tose items  */}
              </li>
            </ul>
          </div>
        </div>
      ));
    }

    // <ul class="collapsible">
    //   <li>
    //     <div class="collapsible-header">
    //       <i class="material-icons">filter_drama</i>First
    //     </div>
    //     <div class="collapsible-body">
    //       <span>Lorem ipsum dolor sit amet.</span>
    //     </div>
    //   </li>
    // </ul>;
    return (
      <div>
        <ul>{eventsList}</ul>
      </div>
    );
  }
}
