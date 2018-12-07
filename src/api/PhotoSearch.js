import React, {Component} from 'react';
import '../style/App.css';
import axios from "axios/index";

class PhotoSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photoInfo: {},
            originalformat: {},
            photoSrc: {},
            isLoaded: false
        }
    }

    componentDidMount() {
        this.getPhotoInfo(this.props.name);
        console.log(this.props.isReady);
    }

        getPhotoInfo = () => {
            {
                const tags = this.props.name;
                const key = process.env.REACT_APP_PHOTO_KEY;
                axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + key +'&tags=' + tags + '%2C+architecture&tag_mode=all&privacy_filter=1&format=json&nojsoncallback=1')
                    .then((res) => {
                        const photoArray = res.data.photos.photo;
                        const photoInfo = photoArray[Math.floor(Math.random() * photoArray.length)];
                        this.setState({photoInfo}, () => {
                            this.getMoreInfo(key);
                        });

                    })
            }
        }

        getMoreInfo(key)
        {
            axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=' + key + '&photo_id=' + this.state.photoInfo.id + '&secret=' + this.state.photoInfo.secret + '&format=json&nojsoncallback=1')
                .then((res) => {
                    this.setState({originalformat: res.data.photo.originalformat}, () => {
                        console.log(res.data.photo.usage.candownload == 1);

                            if (res.data.photo.usage.candownload == 1) {
                                const photoSrcSmall = 'https://farm' + this.state.photoInfo.farm + '.staticflickr.com/' + this.state.photoInfo.server + '/' + this.state.photoInfo.id + '_' + this.state.photoInfo.secret + '_s.' + this.state.originalformat;
                                const photoSrc = 'https://farm' + this.state.photoInfo.farm + '.staticflickr.com/' + this.state.photoInfo.server + '/' + this.state.photoInfo.id + '_' + this.state.photoInfo.secret + '_h.' + this.state.originalformat;

                                var bg = document.getElementsByClassName("App");
                                var elem = document.getElementsByClassName("BG");
                                var weather = document.getElementsByClassName("weather");

                                elem[0].style.opacity = '0';
                                weather[0].style.opacity = '0';

                                bg[0].style.backgroundImage = 'url(' + photoSrcSmall + ')';
                                bg[0].style.filter = "blur(50px)";
                                elem[0].style.webkitTransition = "opacity 2s";

                                const img = new Image();
                                img.src = photoSrc;
                                img.onload = (() => {
                                        elem[0].style.webkitTransition = "opacity 7s";
                                        elem[0].style.filter = "blur(1px)";
                                        elem[0].style.opacity = '1';
                                        elem[0].style.backgroundImage = 'url(' + photoSrc + ')';
                                        weather[0].style.webkitTransition = "opacity 4s";
                                        weather[0].style.opacity = "1";
                                });
                                } else {
                                    this.getPhotoInfo();
                            }
                        });
                    })

                .catch(error => {
                    console.log(error.response)
                });
        }


    render() {

        const elem = document.getElementsByClassName("input");

        if (this.props.isReady === true) {
            elem[0].addEventListener("keyPress", this.getPhotoInfo);
            }

        return (
            <div></div>
        )
    }
}

export default PhotoSearch;
