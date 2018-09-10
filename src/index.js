import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebcamCapture from "./webcam";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<WebcamCapture />, document.getElementById('webcam'));
registerServiceWorker();
