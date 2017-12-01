import React, { Component } from 'react';
// import { Login } from 'pages/login';

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
            <div>
                <div className = "Header">
                    <h1>Forgot your password? 😱</h1>
                </div>
                <div className = "Verification">
                    <form className="ui form">
                        <div className="field">
                            <label>Confirm UC Merced E-Mail</label>
                            <input type="text" name="email" placeholder="Enter UCMid..."/>
                        </div>

                        <br/><br/>
                            <button className="ui button" type="submit">Send Verification Key! ✊🏻 </button>
                            <br/>

                    </form>
                </div>
            </div>
            );
    }
}




