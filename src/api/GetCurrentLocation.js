import React, {Component} from 'react';
import '../style/App.css';
import axios from 'axios/index'
import SearchInput from "../components/SearchInput";
import PhotoSearch from "./PhotoSearch";
import CitySearch from "./CitySearch";


class GetCurrentLocation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: '',
            longitude: '',
            name: '',
            isLoaded: false,
            isReady: false
        }
    }


    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
                this.setState({latitude: location.coords.latitude}, () => {
                    this.setState({longitude: location.coords.longitude}, () => {
                        axios.get('http://open.mapquestapi.com/geocoding/v1/reverse?key=lo0qC32FL18PT6AffYMuwfyxCaLqX7rb&location=' + this.state.latitude + ',' + this.state.longitude + '&includeRoadMetadata=true&includeNearestIntersection=true')
                            .then(res => {
                                this.setState({name: res.data.results[0].locations[0].adminArea5}, () => {
                                    this.setState({isLoaded: true});
                                });
                            })
                            .catch(error => {
                                console.log(error.response)
                            })
                    })
                })
            })
        }
    }


    render() {


        return <div>
            {this.state.isLoaded &&
            <SearchInput
            name={this.state.name}/> }
            {this.state.isLoaded &&
            <CitySearch
            isReady={this.state.isReady}/> }
            {this.state.isLoaded &&
            <PhotoSearch
            name={this.state.name}
            isReady={this.state.isReady}/> }
        </div>
    }
}

export default GetCurrentLocation;