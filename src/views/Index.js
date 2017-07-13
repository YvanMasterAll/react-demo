import React from 'react';
import {Navbar} from './Navbar';
import {Home} from "./Home";
import './Index.css';

export class Index extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <div className="main-navbar">
                    <Navbar {...this.props}/>
                </div>
            </div>
        )
    }
}