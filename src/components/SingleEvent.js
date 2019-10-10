import React, { Component } from "react";
import sanitize from "striptags";

export default class SingleEvent extends Component {
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
              </div>
              <div className="row">
                <img className="col s4 logo" alt="logo" src={event.logo} />
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
                    <a href={event.url}>Go to event website to read more.</a>
                    {/* </div> */}
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
