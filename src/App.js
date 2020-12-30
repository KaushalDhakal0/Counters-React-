import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter.jsx";
import Navbar from "./components/navbar.jsx";
class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 10,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
      {
        id: 5,
        value: 20,
      },
    ],
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({
      counters,
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map((data) => {
      data.value = 0;
      return data;
    });
    this.setState({
      counters,
    });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {
      ...counter,
    };
    counters[index].value++;
    this.setState({
      counters,
    });
  };
  findTotal = (array, column) => {
    let values = array.map((item) => parseInt(item[column]) || 0);
    return values.reduce((a, b) => a + b);
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {
      ...counter,
    };
    counters[index].value--;
    this.setState({
      counters,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counter
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
