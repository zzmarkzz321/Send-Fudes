import React, { Component } from 'react';

export class Forgot extends Component {
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

