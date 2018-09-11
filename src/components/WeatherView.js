import React, {Component} from 'react';
import '../style/App.css';
import WeatherColumn from "./WeatherColumn";


class WeatherView extends Component {

    render() {
        return (
            <div className="weatherApp">
                <div className="cityInfo">
                    <p>{this.props.name}, {this.props.country}</p>
                </div>
                <div className="weatherInfo">
                    <div className="columns is-4">
                        <div className="column is-4">
                            <div className="weatherNow">
                                <WeatherColumn
                                    name={this.props.name}
                                    country={this.props.country}
                                    weatherTemp={this.props.weatherNow[0].main.temp_min}
                                    dateNtime={this.props.weatherNow[0].dt_txt}
                                    weatherDescription={this.props.weatherNow[0].weather[0].description}
                                    pressure={this.props.weatherNow[0].main.pressure}
                                    humidity={this.props.weatherNow[0].main.humidity}
                                    windSpeed={this.props.weatherNow[0].wind.speed}
                                />
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="weatherNow">
                                <WeatherColumn
                                    weatherTemp={this.props.weatherNow[1].main.temp_min}
                                    dateNtime={this.props.weatherNow[1].dt_txt}
                                    weatherDescription={this.props.weatherNow[0].weather[0].description}
                                    pressure={this.props.weatherNow[1].main.pressure}
                                    humidity={this.props.weatherNow[1].main.humidity}
                                    windSpeed={this.props.weatherNow[1].wind.speed}
                                />
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="weatherNow">
                                <WeatherColumn
                                    weatherTemp={this.props.weatherNow[2].main.temp_min}
                                    dateNtime={this.props.weatherNow[2].dt_txt}
                                    weatherDescription={this.props.weatherNow[0].weather[0].description}
                                    pressure={this.props.weatherNow[2].main.pressure}
                                    humidity={this.props.weatherNow[2].main.humidity}
                                    windSpeed={this.props.weatherNow[2].wind.speed}
                                />
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="weatherNow">
                                <WeatherColumn
                                    weatherTemp={this.props.weatherNow[3].main.temp_min}
                                    dateNtime={this.props.weatherNow[3].dt_txt}
                                    weatherDescription={this.props.weatherNow[3].weather[0].description}
                                    pressure={this.props.weatherNow[3].main.pressure}
                                    humidity={this.props.weatherNow[3].main.humidity}
                                    windSpeed={this.props.weatherNow[3].wind.speed}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherView;
