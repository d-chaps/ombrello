import React, {Component} from 'react';
import '../style/App.css';

class CurrentWeather extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: '',
            lng: '',
            currentTime: ''
        }
    }

    componentDidMount() {
        this.convertEpoch();
    }

    convertEpoch = () => {
        var myDate = new Date(this.props.currently * 1000);
        this.setState({currentTime: myDate.toGMTString()});
    }

    render() {

        return (
            <div>
                {this.state.currentTime}
            </div>
        )
    }
}

export default CurrentWeather;