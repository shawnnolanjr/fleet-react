import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import FleetHeader from './views/partials/header';
import Dashboard from './views/dashboard/dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FleetHeader />, document.getElementById('root'));
ReactDOM.render(<Dashboard />, document.getElementById('sub_root'));
registerServiceWorker();
