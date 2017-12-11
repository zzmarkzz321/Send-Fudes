import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Send-Fudes</h1>
                </header>
                <div className = "LogIn">
                    <form className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input type="text" name="first-name" placeholder="Enter UCMid"/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="last-name" placeholder="Enter password......"/>
                        </div>

                        <Link to="/forgot-password"><a>Forgot Password?</a></Link>
                        <br/><br/>
                        <button className="ui button" type="submit">Submit 👅</button>
                        <br/>
                        <p>New to SendFudes? <Link to="register"><a> Sign-Up!</a></Link></p>
                        <br/>
                    </form>
                </div>
            </div>
        );
    }
}

