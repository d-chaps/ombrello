import React, {Component} from 'react';
import '../style/App.css';
import axios from "axios/index";

class PhotoSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photoInfo: {},
            originalsecret: {},
            originalformat: {},
            photoSrc: {},
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.cityName !== prevProps.cityName) {
            var tags = this.props.cityName;
            this.getPhotoInfo(tags);
        }
    };

    componentDidMount() {
        this.getPhotoInfo(this.props.cityName);
    }


        getPhotoInfo(tags)
        {
            const key = process.env.REACT_APP_PHOTO_KEY;
            axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + key +'&tags=' + tags + '&privacy_filter=1&format=json&nojsoncallback=1')
                .then((res) => {
                    const photoInfo = res.data.photos.photo[Math.floor((Math.random() * 50) + 1)];
                    this.setState({photoInfo});
                    this.getMoreInfo(key);

                })
        }

        getMoreInfo(key)
        {
            axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=' + key + '&photo_id=' + this.state.photoInfo.id + '&secret=' + this.state.photoInfo.secret + '&format=json&nojsoncallback=1')
                .then((res) => {
                    this.setState({originalsecret: res.data.photo.originalsecret}, () => {
                        this.setState({originalformat: res.data.photo.originalformat}, () => {

                            if (res.data.photo.usage.candownload === 1) {
                                const photoSrc = 'https://farm' + this.state.photoInfo.farm + '.staticflickr.com/' + this.state.photoInfo.server + '/' + this.state.photoInfo.id + '_' + this.state.originalsecret + '_o.' + this.state.originalformat;
                                var elem = document.getElementsByClassName("App");
                                elem[0].style.webkitTransition = "opacity 100s ease-in 50s";
                                elem[0].style.filter = "blur(1px)";
                                elem[0].style.backgroundColor = "#f3f3f3";
                                elem[0].style.backgroundImage = 'url(' + photoSrc + ')';
                                elem[0].style.webkitBackgroundSize = "cover";
                            } else {
                                this.getPhotoInfo();
                            }
                        });
                    });
                })

                .catch(error => {
                    console.log(error.response)
                });
        }

    render() {

        return (
            <div></div>
        )
    }
}

export default PhotoSearch;
