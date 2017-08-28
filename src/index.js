import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import $ from 'jquery';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './container/app';
import 'font-awesome/css/font-awesome.css';
import './paper.css';
import './index.css';

window.jQuery = window.$ = $;
require('bootstrap');

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
