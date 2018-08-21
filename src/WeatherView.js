import React, { Component } from 'react';
import './style/App.css';
import raning from './style/raning.png'
import clear from './style/clear.png'
import cloudy from './style/fewclouds.png';


class WeatherView extends Component {

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


        if (this.props.weatherNow[0].weather[0].description === 'broken clouds' || this.props.weatherNow[0].weather[0].description === 'light rain') {
            isRaining = true
        } else if (this.props.weatherNow[0].weather[0].description === 'clear sky') {
            isClear = true;
        } else if (this.props.weatherNow[0].weather[0].description === 'few clouds' || this.props.weatherNow[0].weather[0].description === 'overcast clouds'
            || this.props.weatherNow[0].weather[0].description === 'scattered clouds') {
            isCloudy = true;
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
    }


    return (
        <div className="weatherApp">
            <div className="cityInfo">
                <p>{this.props.name}, {this.props.country}</p>
            </div>
        <div className="weatherInfo">
            <div className="columns is-3">
                <div className="column is-3">
                    <div className="weatherNow">
                        <div className="dateNtime">
                            {this.props.weatherNow[0].dt_txt.slice(0,16)}</div>

                         { isRaining &&
                        <div className="imgBox"><img src={raning}/></div>
                        }
                        { isClear &&
                        <div className="imgBox"><img src={clear} /></div>
                        }
                        { isCloudy &&
                        <div className="imgBox"><img src={cloudy}/></div>
                        }

                        <div className="weatherDescription">
                            {this.props.weatherNow[0].weather[0].description}
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Temperature:</div> {(this.props.weatherNow[0].main.temp_min - 273.15).toFixed(1)}°C
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Pressure:</div> {this.props.weatherNow[0].main.pressure} hPa
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Humidity:</div>    {this.props.weatherNow[0].main.humidity}%
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Wind Speed:</div> {this.props.weatherNow[0].wind.speed} km/h
                        </div>
                    </div>
                </div>
                <div className="column is-3">
                    <div className="weatherLater">
                        <div className="dateNtime">
                            {this.props.weatherNow[1].dt_txt.slice(0,16)}</div>

                        { isRaining3 &&
                        <div className="imgBox"><img src={raning}/></div>
                        }
                        { isClear3 &&
                        <div className="imgBox"><img src={clear} /></div>
                        }
                        { isCloudy3 &&
                        <div className="imgBox"><img src={cloudy}/></div>
                        }

                        <div className="weatherDescription">
                            {this.props.weatherNow[1].weather[0].description}
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Temperature:</div> {(this.props.weatherNow[1].main.temp_min - 273.15).toFixed(1)}°C
                            </div>
                        <div className="moreInfo">
                        <div className="bold">Pressure:</div> {this.props.weatherNow[1].main.pressure} hPa
                        </div>
                        <div className="moreInfo">
                        <div className="bold">Humidity:</div>    {this.props.weatherNow[1].main.humidity}%
                        </div>
                        <div className="moreInfo">
                        <div className="bold">Wind Speed:</div> {this.props.weatherNow[1].wind.speed} km/h
                        </div>
                </div>
                </div>
                <div className="column is-3">
                    <div className="weatherLater">
                        <div className="dateNtime">
                            {this.props.weatherNow[2].dt_txt.slice(0,16)}</div>
                        { isRaining6 &&
                        <div className="imgBox"><img src={raning}/></div>
                        }
                        { isClear6 &&
                        <div className="imgBox"><img src={clear} /></div>
                        }
                        { isCloudy6 &&
                        <div className="imgBox"><img src={cloudy}/></div>
                        }
                            <div className="weatherDescription">
                                {this.props.weatherNow[2].weather[0].description}
                            </div>
                        <div className="moreInfo">
                            <div className="bold">Temperature:</div> {(this.props.weatherNow[2].main.temp_min - 273.15).toFixed(1)}°C
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Pressure:</div> {this.props.weatherNow[2].main.pressure} hPa
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Humidity:</div>    {this.props.weatherNow[2].main.humidity}%
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Wind Speed:</div> {this.props.weatherNow[2].wind.speed} km/h
                        </div>
                </div>
                </div>
                <div className="column is-3">
                    <div className="weatherLater">
                        <div className="dateNtime">
                            {this.props.weatherNow[3].dt_txt.slice(0,16)}</div>
                        { isRaining9 &&
                        <div className="imgBox"><img src={raning}/></div>
                        }
                        { isClear9 &&
                        <div className="imgBox"><img src={clear} /></div>
                        }
                        { isCloudy9 &&
                        <div className="imgBox"><img src={cloudy}/></div>
                        }
                        <div className="weatherDescription">
                            {this.props.weatherNow[3].weather[0].description}
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Temperature:</div> {(this.props.weatherNow[3].main.temp_min - 273.15).toFixed(1)}°C
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Pressure:</div> {this.props.weatherNow[3].main.pressure} hPa
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Humidity:</div>    {this.props.weatherNow[3].main.humidity}%
                        </div>
                        <div className="moreInfo">
                            <div className="bold">Wind Speed:</div> {this.props.weatherNow[3].wind.speed} km/h
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
}

export default WeatherView;
