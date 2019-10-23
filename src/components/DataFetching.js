import React, { Component } from "react";
import axios from "axios";
import "../css/event.css";
// using sanitize to remove all html tags
// import sanitize from "striptags";
// import { hostname } from "os";
import SingleEvent from "./SingleEvent";
import mock from "../mock/mock";

// local hostname:
// http://localhost:3500/test

// original url:
// https://valuer-jenkins.duckdns.org/api/events/startups

// local host - test file made by Donatas:
//localhost:3500/test

const urlData = require("../api/eventsData.json");

export default class DataFetching extends Component {
  state = {
    events: null
  };

  componentDidMount() {
    // console.log(this.props.handleMap);
    if (!this.state.events) {
      axios
        .get("/events")
        .then(response => {
          // console.log(response.data.startupEvents);
          this.setState({ events: response.data.startupEvents });
        })
        .catch(err => {
          console.log(err);
        });
      // axios
      //   .get(urlData)
      //   .then(res => {
      //     // console.log("data from api", res.data);
      //     console.log(res);
      //     this.setState({ events: res });
      //     //set state to loading false
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
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
      return (
        <SingleEvent
          handleMap={this.props.handleMap}
          events={this.state.events}
        />
      );
    }
    return (
      <div>
        <ul>{eventsList}</ul>
      </div>
    );
  }
}
