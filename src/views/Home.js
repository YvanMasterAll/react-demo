import React from 'react';

export class Home extends React.Component {
    render() {
        return (
            <div className="main-content">
                <h1>Welcome</h1>
                <p>This is the home page</p>
                <p>The time is {this.props.currentTime.toString()}</p>
                <button onClick={this.props.updateTime}>
                    Update
                </button>
            </div>
        )
    }
}