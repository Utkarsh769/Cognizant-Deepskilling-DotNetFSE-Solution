import { Component } from "react";
import CurrencyConverter from "./CurrencyConverter";

class EventExamples extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  sayHello = () => {
    alert("Hello! Member");
  };

  sayWelcome = (message) => {
    alert(message);
  };

  syntheticEvent = () => {
    alert("I was clicked");
  };

  increase = () => {
    this.increment();

    this.sayHello();
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>

        <button onClick={this.increase}>Increment</button>

        <br />
        <br />

        <button onClick={this.decrement}>Decrement</button>

        <br />
        <br />

        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>

        <br />
        <br />

        <button onClick={this.syntheticEvent}>Click on me</button>

        <br />
        <br />

        <CurrencyConverter />
      </div>
    );
  }
}

export default EventExamples;
