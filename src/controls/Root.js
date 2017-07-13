import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import DevTools from '../redux/devtools/DevTools';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';

export const Root = ({store}) => {
    return (
        <Provider store={store}>
            <div>
                <App />
                <DevTools />
            </div>
        </Provider>
    )
}

export default Root