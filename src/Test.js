import React, { Component } from 'react';
import './style/App.css';
import raning from './style/raning.png'
import clear from './style/clear.png'
import cloudy from './style/fewclouds.png';

class Test extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return(
        <div>
            <div className="weatherInfo">
            <div className="columns is-3">
                <div className="column is-3">
                    <div className="weatherNow">
            {this.props.weatherTemp}
                </div>
            </div>
            </div>
            </div>
        </div>
        )
    }
}
export default Test;