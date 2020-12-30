import React, { Component } from "react";
import Counteromponent from "./counterComponent";

export default class counter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset All
        </button>
        {this.props.counters.map((counter) => (
          <Counteromponent
            key={counter.id}
            onDelete={this.props.onDelete}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          ></Counteromponent>
        ))}
      </div>
    );
  }
}
