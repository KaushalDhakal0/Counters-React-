import React, { Component } from "react";

class Counter extends Component {
  //this is controlled component..
  //it receives all it's data through props...

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className=" btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <span className="btn btn-secondary btn-sm m-2">
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className=" btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
