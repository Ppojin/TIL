import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers'

const createStoreWithMiddlewar = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddlewar(reducers)}>
        <App />
    </Provider>
, document.getElementById('root'));
