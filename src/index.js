import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { time: null };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    console.log(this.state.time);
    return (
      <div>
        <div className="time">The time is: {this.state.time}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
