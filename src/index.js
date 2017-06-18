import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/Search_Bar';
import VideoList from './components/Video_List';

const API_KEY = 'AIzaSyDn_5dOa_Rd3nSM5LavpKrnScgieM_lyOM';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {

        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));