import React, { Component, Fragment } from "react";
import sanitize from "striptags";
import "../css/event.css";
import { all } from "q";
import { Collapsible, CollapsibleItem } from "react-materialize";

export default class SingleEvent extends Component {
  componentDidMount() {}

  render() {
    const { events } = this.props;
    return (
      <Collapsible
        popout
        className="mainCol"
        defaultActiveKey={1}
        accordion={true}
      >
        {events.map(event => {
          return (
            <Fragment key={`frag-${event._id}`}>
              <div className="row">
                <h1 className="col s12 name">{event.name}</h1>
              </div>
              <div className="row">
                <img className="col s4 logo" alt="logo" src={event.logo} />
                <p className="col s8 address">{event.address}</p>
              </div>
              <CollapsibleItem
                key={event._id}
                expanded={false}
                data-lat={event.lat}
                data-lon={event.lon}
                onSelect={() => this.props.handleMap(event)}
                header="More Info"
                className="textWindow"
              >
                {sanitize(event.description)}
              </CollapsibleItem>
            </Fragment>
          );
        })}
      </Collapsible>
    );
  }
}
