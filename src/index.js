import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers'
import App from './components/App';

const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
    <Provider store={storeWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('app')
)
