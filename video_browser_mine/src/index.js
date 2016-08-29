import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import configureStore from './store/configureStore';
import ActorHandler from './actors/index';

const USE_REDUX_PROMISE = true;
let _store;

if(USE_REDUX_PROMISE) {
  _store = applyMiddleware(ReduxPromise)(createStore)(reducers);
} else {
  _store = configureStore();
}

ActorHandler(_store);

export const store = _store;

ReactDOM.render(
    <Provider store={_store}>
        <App />
    </Provider>,
    document.querySelector('.container')
);
