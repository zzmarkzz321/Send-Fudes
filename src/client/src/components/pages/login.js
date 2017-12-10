import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Send-Fudes</h1>
                </header>
                <div className= "LogIn">
                    <form className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input type="text" name="first-name" placeholder="Enter UCMid">
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="last-name" placeholder="Enter password......">
                        </div>
                        <a href="forgot.html">Forgot Password?</a>
                        <br><br>
                            <button className="ui button" type="submit">Submit 👅</button>
                            <br>
                                <p>New to SendFudes?
                                    <a href="register.html"> Sign-Up!</a>
                                </p>
                    </form>
                </div>
            </div>
        );
    }
};

