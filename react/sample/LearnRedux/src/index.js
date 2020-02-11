import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux import
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'; // ./reducers/index.js, ./reducers/reducer-books.js

// store 추가
const store = createStore(reducer);

// provider 추가
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
