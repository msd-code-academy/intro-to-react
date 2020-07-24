import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './exercises/01-hello-world/App';
// import {App} from './solutions/02-props';
// import {App} from './solutions/03-state';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
