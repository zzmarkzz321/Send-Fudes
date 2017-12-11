import React, { Component } from 'react';

export class Registration extends Component {
    render() {
        return (
            <div>
                <h1 className = "register">Sign-Up to GET FUDES!</h1>
                <br/>
                <p className = "register">Leaking FUDES directly to you! 😜</p>
                <div className = "SignUp">
                    <form className="ui form">
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder="Enter First Name"/>
                        </div>
                        <div className="Last Name">
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder="Enter Last Name"/>
                        </div>
                        <div className="Phone Number">
                            <label>Phone Number</label>
                            <input type="text" name="phone-number" placeholder="Enter Phone Number"/>
                        </div>
                        <div className="DOB">
                            <label>Date of Birth</label>
                            <input type="date" name="dob" placeholder="--/--/----"/>
                        </div>
                        <div className="email">
                            <label>UC Merced E-mail</label>
                            <input type="text" name="email" placeholder="...@ucmerced.edu"/>
                        </div>
                        <div className="gender">
                            <label>Gender</label>
                            <input type="text" name="gender" placeholder="Enter Gender"/>
                        </div>
                        <div className="password">
                            <label>Create a Password</label>
                            <input type="password" name="password" placeholder="Enter Password"/>
                        </div>
                        <br/><br/>
                        <button className="ui button" type="submit ">Sign-Up!  🙌🏻</button>
                        <br/>

                    </form>
                </div>
            </div>
        );
    }
}

