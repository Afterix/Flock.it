import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import flockitApp from './reducers';
import './index.css';

let store = createStore(flockitApp);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
