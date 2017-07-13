import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './controls/Root'
import './index.css';
import {store} from './redux/configureStore';

//prime
ReactDOM.render(
	<Root store={store} />,
	//<Prime />,
	document.getElementById("root")
)

registerServiceWorker();

