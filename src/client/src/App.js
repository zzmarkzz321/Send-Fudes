import React, { Component } from 'react';
import { About, Home } from './components/';

export default class App extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Hello {this.props.name}</h1>

                <Home />
                <About />
            </div>
        );
    }
}