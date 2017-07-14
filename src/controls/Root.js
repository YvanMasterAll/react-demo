import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import DevTools from '../redux/devtools/DevTools';

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