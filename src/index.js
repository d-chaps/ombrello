import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import registerServiceWorker from './registerServiceWorker';
const env = require('dotenv').config();

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}