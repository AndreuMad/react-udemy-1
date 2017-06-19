import _ from 'lodash';
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

        this.videoSearch('cats');
    }

    videoSearch(term) {

        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));