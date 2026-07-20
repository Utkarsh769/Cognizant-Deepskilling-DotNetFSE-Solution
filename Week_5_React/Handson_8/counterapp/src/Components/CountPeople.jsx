import React, { Component } from "react";

class CountPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entryCount: 0,
      exitCount: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1,
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1,
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Mall Entry Counter</h1>

        <div className="counter-row">
          <div className="counter-box">
            <button onClick={this.updateEntry}>Login</button>

            <h3>{this.state.entryCount} People Entered!!</h3>
          </div>

          <div className="counter-box">
            <button onClick={this.updateExit}>Exit</button>

            <h3>{this.state.exitCount} People Left!!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default CountPeople;
