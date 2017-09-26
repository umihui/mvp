import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import AddPlant from './components/add-plant.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<AddPlant />, document.getElementById('root'));
registerServiceWorker();
