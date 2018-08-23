import React, { Component } from 'react';
import './style/App.css';
import raining from './style/weatherIcons/raining.png';
import clear from './style/weatherIcons/clear.png';
import cloudy from './style/weatherIcons/fewclouds.png';
import thunderstorm from './style/weatherIcons/thunderstorm.png';

class WeatherColumn extends Component {

    render() {

        let isRaining = false;
        let isClear = false;
        let isCloudy = false;
        let isThunderstorm = false;

        if (this.props.weatherDescription === 'broken clouds' || this.props.weatherDescription === 'light rain' || this.props.weatherDescription === 'moderate rain') {
            isRaining = true
        } else if (this.props.weatherDescription === 'clear sky') {
            isClear = true;
        } else if (this.props.weatherDescription === 'few clouds' || this.props.weatherDescription === 'overcast clouds'
            || this.props.weatherDescription === 'scattered clouds') {
            isCloudy = true;
        }

        return(
        <div>
            <div className="dateNtime">
                {(this.props.dateNtime.slice(0,16))}</div>
            { isRaining &&
            <div className="imgBox" alt="rain"><img src={raining}/></div>
            }
            { isClear &&
            <div className="imgBox" alt="clear"><img src={clear} /></div>
            }
            { isCloudy &&
            <div className="imgBox" alt="cloudy"><img src={cloudy}/></div>
            }

            <div className="weatherDescription">
                {this.props.weatherDescription}
            </div>
            <div className="moreInfo">
                <div className="bold">Temperature:</div> {(this.props.weatherTemp - 273.15).toFixed(1)}°C
            </div>
            <div className="moreInfo">
                <div className="bold">Pressure:</div> {this.props.pressure} hPa
            </div>
            <div className="moreInfo">
                <div className="bold">Humidity:</div>    {this.props.humidity}%
            </div>
            <div className="moreInfo">
                <div className="bold">Wind Speed:</div> {this.props.windSpeed} km/h
            </div>
        </div>
        )
    }
}
export default WeatherColumn;