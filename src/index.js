import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import FleetHeader from './views/partials/header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FleetHeader />, document.getElementById('root'));
registerServiceWorker();
