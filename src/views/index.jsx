import "normalize.css/normalize.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/index.jsx';
import {
	Provider
} from 'react-redux'
import store from './stores'

ReactDOM.render(
	<Provider store={store}>
    <App/>
  </Provider>, document.getElementById('layout'));