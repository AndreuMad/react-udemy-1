import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/Search_Bar'

const API_KEY = 'AIzaSyDn_5dOa_Rd3nSM5LavpKrnScgieM_lyOM';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));