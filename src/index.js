import React from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './components/LandingPage';

import './style/index.css';
import registerServiceWorker from './registerServiceWorker';

function App() {
    return(
        <div>
            <LandingPage/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
