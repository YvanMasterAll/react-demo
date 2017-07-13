import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

import Index from '../containers/Index';
import Home from '../containers/Home';
import About from '../containers/About';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Index} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        )
    }
}

export default App




