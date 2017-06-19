import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/Search_Bar';
import VideoList from './components/Video_List';
import VideoDetail from './components/Video_Detail';

const API_KEY = 'AIzaSyDn_5dOa_Rd3nSM5LavpKrnScgieM_lyOM';



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {

        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));