import React, {Component} from 'react';
import './/style/style.css';
import axios from "axios/index";
import CurrentWeather from "../components/CurrentWeather";

class CitySearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: '',
            lng: '',
            currently: '',
            nextDays: '',
            isReady: false

        }
    }

    componentDidMount() {
            this.handleAPIsearch();
    }


    handleAPIrequest = () => {
        const locationKey = process.env.REACT_APP_API_KEY;
        const cityName = this.props.name;

        axios.get('http://open.mapquestapi.com/geocoding/v1/address?key=lo0qC32FL18PT6AffYMuwfyxCaLqX7rb&location=' + cityName)
            .then(res => {
                this.setState({lat: res.data.results[0].locations[0].displayLatLng.lat}, () => {
                    this.setState({lng: res.data.results[0].locations[0].displayLatLng.lng}, () => {
                        axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a66347e9c2bdb45fdb3ef2ee3fd03b55/' + this.state.lat + ',' + this.state.lng)
                            .then(res => {
                                console.log(res.data);
                                this.setState({currently: res.data.currently.time}, () => {
                                    this.setState({isReady: true});
                                });
                            })
                    })
                });
            })
            .catch(error => {
                console.log(error.response)
            });
    };

    handleAPIsearch = () => {
        console.log("api search");
        let apiPromise = new Promise((resolve, reject) => {

            setTimeout(() => {
                if (this.props.name !== '') {
                    resolve();
                } else {
                    reject();
                }
            }, 100);
        });

        apiPromise
            .then(() => {
                this.handleAPIrequest();
            })
            .catch(() => {
                console.log('Something went wrong');
            });
    };

test = () => {
    console.log("dupa");
}

    render() {


        if (this.props.isReady === true) {
            const inputElem = document.getElementsByClassName("input")[0];
            inputElem.addEventListener("keypress", this.test);
        }

        return (
            <div className="weather">
                {this.state.isReady &&
                <CurrentWeather
                    currently={this.state.currently}/>
                }
            </div>
        )
    }
}

export default CitySearch;
