import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div
            style={{
              background: "red",
              display: "flex",
              textAlign: "center",
              paddingLeft: "90px",
            }}
            className="container-fluid"
          >
            <a
              style={{
                color: "white",
              }}
              className="navbar-brand"
              href="#"
            >
              Navbar For Counter
              <span className="countTotal">{this.props.totalCounters}</span>
              <h1>total of all the counts is: {this.props.totalCount}</h1>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
