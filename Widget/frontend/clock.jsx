import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);

  }
  componentDidMount() {
    this.tick_id = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick_id);
  }
  tick() {
    this.setState({
      time: new Date()
    });
  }

  currentTime(){
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return `${hours}:${minutes}:${seconds}`;
  }

  render(){
    return (
      <div>
      <h1 className="current">Clock</h1>
      <div className="current">{this.currentTime()}</div>
      </div>


    );

  }
}


export default Clock;
