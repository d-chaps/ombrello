import React, {Component} from 'react';
import './style/style.css';
import CitySearch from '../api/CitySearch';
import PhotoSearch from '../api/PhotoSearch';


class SearchInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cityName: '',
            isClicked: false,
            isReady: true
        }
    }


    handleChange = (event) => {
        this.setState({cityName: event.target.value}, () => {
            this.setState({isReady: true});
        });
    }

    handleClick = () => {
        this.setState({isClicked: true});
    }

    render() {

        const location = document.getElementsByClassName("input is-medium");
        location.placeholder = this.props.name;


        return (
            <div className="app">
                <div className="App"></div>
                <div className="BG"></div>
                <div className="ombrello">Ombrello</div>
                <div className="mainBox">
                    <div className="searchBox">
                        <div className="searchBar">
                            <div className="field has-addons has-background-grey">
                                <div className="control has-icons-left">
                                    <input className="input is-large" type="text"
                                           placeholder={location.placeholder}
                                           value={this.state.cityName}
                                           onChange={event => this.handleChange(event)}
                                           onKeyPress={event => {
                                               if (event.key === 'Enter') {
                                                   this.handleClick();
                                               }
                                           }}/>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-search fa-3x"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="boxContent">
                        {this.state.isClicked &&
                        <CitySearch
                        name={this.state.cityName}
                        isReady={this.state.isReady}/> } */
                        {this.state.isClicked &&
                        <PhotoSearch
                            name={this.state.cityName}
                            isReady={this.state.isReady} /> }
                    </div>
                <div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default SearchInput;
