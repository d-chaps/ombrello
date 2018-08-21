import React, { Component } from 'react';
import './style/App.css';
import axios from "axios/index";
import WeatherView from "./WeatherView";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cityName: '',
            cityId: '',
            country: '',
            weatherNow: '',
            errorMsg: '',
            isHidden: false,
            isLoaded: false
        }
    }

handleChange = (event) => {
    this.setState({cityName:  event.target.value})
}

handleSearch = () => {
    const cityList = this.props.cityList;
    const fixedString = this.state.cityName.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    const cityNames = cityList.map(city => city.name);
    for (var i = 0; i <= cityNames.length; i++) {
        if (fixedString === (cityNames[i])) {
            const cityId = cityList[i].id;
            this.setState({cityId});
        }
    }
};


handleAPIrequest = () => {


        const key = '9294f0507043ce42f17b079b26218d80';
        const cityId = this.state.cityId;

        axios.get('http://api.openweathermap.org/data/2.5/forecast', {
            params: {
                id: cityId,
                APPID: key
            }
        })
            .then(res => {
                const country = res.data.city.country;
                const name = res.data.city.name;
                const weatherNow = res.data.list;
                this.setState({country});
                this.setState({name});
                this.setState({weatherNow}, () =>{
                    this.setState({isLoaded: true});
                });
                })
            .catch(error => {
                console.log(error.response)
            });
    }

handleAPIsearch = () => {
    let apiPromise = new Promise((resolve, reject) => {
        this.handleSearch();

    setTimeout(() => {
        if (this.state.cityId) {
            resolve();
        } else {
            reject();
        }
        }, 100);
    });

    apiPromise
        .then(() => {
        this.handleAPIrequest();
        this.setState({cityId: ''});
        this.setState({errorMsg: ''});
        this.setState({isHidden: true});
        })
        .catch(() => {
            console.log('Something went wrong');
            this.setState({errorMsg: 'City not in database'});
            this.setState({isHidden: false});
        });
}

    render() {


        return <div className="App">
            <div className="ombrello">OMBRELLO</div>
            <div className="mainBox">
                <div className="searchBox">
            <div className="searchBar">
                <div className="field has-addons has-background-grey">
                    <div className="control">
                        <input className="input is-medium" type="text"
                               placeholder="Type city name"
                               value={this.state.cityName}
                               onChange={event => this.handleChange(event)}
                        />
                    </div>
                    <div className="control">
                        <a className="button is-medium is-dark"
                           onClick={() => this.handleAPIsearch()}>
                            Search
                        </a>
                    </div>
                </div>
            </div>
                </div>
                <div className="boxContent">
                    {this.state.isHidden && this.state.isLoaded &&
                    <WeatherView
                        name={this.state.name[0].toUpperCase() +
                                  this.state.name.substring(1)}
                        weatherNow={this.state.weatherNow}
                        country={this.state.country}

                    />}
                    <div className="errorMsg">
                        {this.state.errorMsg}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default App;
