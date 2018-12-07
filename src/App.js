import React, {Component} from 'react';
import './style/App.css';
import GetCurrentLocation from './api/GetCurrentLocation';
const env = require('dotenv').config();

class App extends Component {


    render() {
        return <div className="mainApp">
            <GetCurrentLocation/>
        </div>
    }
}

export default App;
