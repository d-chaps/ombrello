import React, { Component } from 'react';
import './style/App.css';
import raning from './style/raning.png'
import clear from './style/clear.png'
import cloudy from './style/fewclouds.png';
import Test from "./Test";


class WeatherViewTest extends Component {

    constructor(props) {
        super(props);

    }

   /* isRaining = () => {
        if ('broken clouds' || 'light rain' === this.props.weatherNow[0].weather[0].description) {
            return true;
        }
    }

    isClear = () => {
        if('clear sky' === this.props.weatherNow[0].weather[0].description) {
            return true
        }
    } */

render() {

    let isRaining = false;
    let isClear = false;
    let isThunderstorm = false;
    let isCloudy = false;
    let isRaining3 = false;
    let isClear3 = false;
    let isThunderstorm3 = false;
    let isCloudy3 = false;
    let isRaining6 = false;
    let isClear6 = false;
    let isThunderstorm6 = false;
    let isCloudy6 = false;
    let isRaining9 = false;
    let isClear9 = false;
    let isThunderstorm9 = false;
    let isCloudy9 = false;

    /*
       for(let i=0; i<=3; i++) {
           if (this.props.weatherNow[i].weather[0].description === 'broken clouds' || this.props.weatherNow[i].weather[0].description === 'light rain') {
               isRaining = true
               break;
           } else if (this.props.weatherNow[i].weather[0].description === 'clear sky') {
               isClear = true;
               break
           } else if (this.props.weatherNow[i].weather[0].description === 'few clouds' || this.props.weatherNow[i].weather[0].description === 'overcast clouds'
               || this.props.weatherNow[0].weather[0].description === 'scattered clouds') {
               isCloudy = true;
               break;
           }
       }
       if(this.props.weatherNow[1].weather[0].description === 'broken clouds' || this.props.weatherNow[1].weather[0].description === 'light rain') {
           isRaining3 = true
       } else if(this.props.weatherNow[1].weather[0].description === 'clear sky') {
           isClear3 = true;
       } else if(this.props.weatherNow[1].weather[0].description === 'few clouds' || this.props.weatherNow[1].weather[0].description === 'overcast clouds'
           || this.props.weatherNow[1].weather[0].description === 'scattered clouds')  {
           isCloudy3 = true;
       }

       if(this.props.weatherNow[2].weather[0].description === 'broken clouds' || this.props.weatherNow[2].weather[0].description === 'light rain') {
           isRaining6 = true
       } else if(this.props.weatherNow[2].weather[0].description === 'clear sky') {
           isClear6 = true;
       } else if(this.props.weatherNow[2].weather[0].description === 'few clouds' || this.props.weatherNow[2].weather[0].description === 'overcast clouds'
           || this.props.weatherNow[2].weather[0].description === 'scattered clouds')  {
           isCloudy6 = true;
       }

       if(this.props.weatherNow[3].weather[0].description === 'broken clouds' || this.props.weatherNow[3].weather[0].description === 'light rain') {
           isRaining9 = true
       } else if(this.props.weatherNow[3].weather[0].description === 'clear sky') {
           isClear9 = true;
       } else if(this.props.weatherNow[3].weather[0].description === 'few clouds' || this.props.weatherNow[3].weather[0].description === 'overcast clouds'
           || this.props.weatherNow[3].weather[0].description === 'scattered clouds')  {
           isCloudy9 = true;
       } */


    return (
        <div className="weatherApp">
            <Test
            weatherTemp = {this.props.weatherNow[0].main.temp_min}
            />
            <Test
                weatherTemp = {this.props.weatherNow[1].main.temp_min}
            />
        </div>
    )
}
}

export default WeatherViewTest;
