import React from "react";

// const Clock = (newComponent) => {
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick =  this.handleClick.bind(this);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    
    componentDidMount() {
      
      this.intervalID = setInterval(
        () => {
          this.tick()
        },
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }

    handleClick(event) {
      // console.log(this);
      
      // console.log(event);
      
    }

    render() {
      return (
        <div>
        <p className="App-clock">
          The time is {this.state.time}.
        </p>
        </div>
      );
    }

  }
// }

export default Clock;