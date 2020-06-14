// https://www.youtube.com/watch?v=Ke90Tje7VS0&t=734s
// Currently at 46:40

import React, { Component } from "react";

class Counter extends Component {
  //State contains any data that this component needs
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
