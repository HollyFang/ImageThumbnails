import "normalize.css/normalize.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/index.jsx';
import {
	Provider
} from 'react-redux'
import {
	createStore
} from 'redux'

import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
    <App/>
  </Provider>, document.getElementById('layout'));