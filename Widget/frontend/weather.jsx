import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
  constructor(){
    super();
    this.state ={
      weather: ""
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let xmlhttp = new XMLHttpRequest();
      this.lat = Math.floor(position.coords.latitude);
      this.lon = Math.floor(position.coords.longitude);

      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {
          this.setState({weather: JSON.parse(xmlhttp.responseText)});
        }
      };

      xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon},&appid=212e9b8cdbeaa1c4c10e63857b2100bb`, true);
      xmlhttp.send();

    });
  }

  render () {
    if (this.state.weather) {
      let temp = this.state.weather.main.temp;
      return (
        <div>
          <h1>Weather</h1>
          <span>{temp}</span>
        </div>
      );

    } else {
      return (<div></div>);
    }
  }
}


export default Weather;
