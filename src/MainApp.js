import React, { Component } from 'react';
import './style/App.css';
import App from './App';
import data from './cityList.json'

class MainApp extends Component {

    state = {
        cityList: data
    }


render() {

    return <div className="App">
                <App cityList={this.state.cityList}/>
    </div>
}
}

export default MainApp;
