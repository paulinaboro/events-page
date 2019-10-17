import React, { Component } from "react";
import sanitize from "striptags";
import M from "materialize-css";
import "../css/event.css";
import { all } from "q";
import { Collapsible, CollapsibleItem } from "react-materialize";

export default class SingleEvent extends Component {
  // state = {
  //   eventId: ""
  // };
  componentDidMount() {}

  render() {
    console.log(this.props);
    const { events } = this.props;
    return (
      <ul>
        {/* accordion = true; accordion = !accordion */}
        {events.map(event => {
          return (
            <div key={event._id} className="eventContainer">
              <div className="event1">
                <div className="row">
                  <h1 className="col s12 name">{event.name}</h1>
                </div>
                <div className="row">
                  <img className="col s4 logo" alt="logo" src={event.logo} />
                  <p className="col s8 address">{event.address}</p>
                </div>
                <Collapsible className="mainCol" popout accordion={true}>
                  <CollapsibleItem
                    expanded={false}
                    data-lat={event.lat}
                    data-lon={event.lon}
                    onClick={() => this.props.handleMap(event)}
                    header="More Info"
                    className="textWindow"
                    //from Alex
                    // className={
                    //   this.state.eventId === event._id
                    //     ? "textWindow active"
                    //     : "textWindow"
                    // }
                    // onClick={() => {
                    //   this.setState({ eventId: event._id });
                    //   console.log(this.state.eventId === event._id);
                    // }}
                  >
                    {sanitize(event.description)}
                  </CollapsibleItem>
                </Collapsible>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}
