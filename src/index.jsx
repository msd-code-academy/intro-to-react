import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './exercises/01-hello-world/App';
// import {App} from './exercises/02-props/App';
// import {App} from './exercises/03-state/App';
// import {App} from './exercises/04-api/App';
// import {App} from './exercises/05-router/App';

// import {App} from './solutions/01-hello-world/App';
// import {App} from './solutions/02-props/App';
// import {App} from './solutions/03-state/App';
// import {App} from './solutions/04-api/App';
// import {App} from './solutions/05-router/App';

// import {App} from './examples/fetch/App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
