import React, {Component} from 'react';
import './style/App.css';
import CitySearch from './api/CitySearch';
import data from './cityList.json'
const env = require('dotenv').config();

class App extends Component {

    state = {
        cityList: data
    }


    render() {
        return <div className="mainApp">
            <CitySearch cityList={this.state.cityList}/>
        </div>
    }
}

export default App;
