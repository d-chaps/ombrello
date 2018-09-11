import React, {Component} from 'react';
import '../style/App.css';
import axios from "axios/index";
import WeatherView from "../components/WeatherView";
import PhotoSearch from './PhotoSearch';

class CitySearch extends Component {

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
            isLoaded: false,
            isError: false
        }
    }

    handleChange = (event) => {
        this.setState({cityName: event.target.value});
    }

    handleSearch = () => {
        const cityList = this.props.cityList;
        const fixedString = this.state.cityName.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        const cityNames = cityList.map(city => city.name);
        for (var i = 0; i < cityNames.length; i++) {
            if (fixedString === (cityNames[i])) {
                const cityId = cityList[i].id;
                this.setState({cityId});
            }
        }
    };

    handleAPIrequest = () => {
        const key = process.env.REACT_APP_API_KEY;
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
                this.setState({weatherNow}, () => {
                    this.setState({isLoaded: true});
                    this.setState({photoState: false});
                });
            })
            .catch(error => {
                console.log(error.response)
            });
    };

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
                this.setState({isError: true});
                this.setState({isHidden: false});
                this.setState({isLoaded: false});
                this.setState({errorMsg: 'City not in database'});
            });
    };

    render() {

        return (
        <div className="app">
            <div className="App"></div>
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
                    {this.state.isHidden && this.state.isLoaded &&
                    <PhotoSearch
                        cityName={this.state.name}
                    />}
                    {this.state.isError && !this.state.isHidden && !this.state.isLoaded && <div className="errorMsg">
                        {this.state.errorMsg}
                    </div>}
                </div>
            </div>
        </div>
        )
    }
}

export default CitySearch;
