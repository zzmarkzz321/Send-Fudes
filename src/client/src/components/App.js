import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="ui vertical masthead center aligned segment">
                    <div className = "Header">
                        <h1>Send-Fudes now 👊</h1>
                    </div>
                </div>

                <div className = "Verification">
                    <div className="ui category search">
                        <div className="ui icon input">
                            <h1>Hello</h1>
                        </div>
                        <div className="results"></div>
                    </div>
                </div>
            </div>
        );
    }
}