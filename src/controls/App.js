import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Index from '../containers/Index';
import Home from '../containers/Home';
import About from '../containers/About';
import Logout from '../containers/Logout'
import Login from '../containers/Login'

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Index} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        )
    }
}

export default App




