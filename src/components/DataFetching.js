import React, { Component } from "react";
import axios from "axios";
import "../css/event.css";
// using sanitize to remove all html tags
// import sanitize from "striptags";
// import { hostname } from "os";
import SingleEvent from "./SingleEvent";

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
    // console.log("state events", this.state.events);
    // create spinner component later on:
    // let eventsList = <Spinner name={this.state.name} />;
    let eventsList = null;
    //check if loasding is false than u can render elements
    // console.log(typeof eventsList);
    if (this.state.events) {
      return <SingleEvent events={this.state.events} />;
    }
    return (
      <div>
        <ul>{eventsList}</ul>
      </div>
    );
  }
}
