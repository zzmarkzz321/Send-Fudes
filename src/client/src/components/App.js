import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { About, Login } from './pages/';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search_value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            search_value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.search_value);
        event.preventDefault();
    }

    render() {
        return (
            <BrowserRouter>

            </BrowserRouter>
            );
    }
}




