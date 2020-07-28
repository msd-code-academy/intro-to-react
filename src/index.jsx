import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './exercises/01-hello-world/App';
// import {App} from './exercises/02-props/App';
// import {App} from './exercises//03-state/App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
