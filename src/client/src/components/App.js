import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { About, Login } from './pages/';
import Navigation from './navigation';


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
                <div className="ui vertical masthead center aligned segment">

                    {/*<Navigation/>*/}

                    {/*<Route exact path="/" component={ App }/>*/}
                    {/*<Route path="/about" component={ About }/>*/}
                    {/*<Route path="/login" component={ Login }/>*/}

                    <div className = "Verification">
                        <div className="ui category search">
                            <div className="ui icon input">
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        <input type="text" value={this.state.search_value} onChange={this.handleChange} />
                                    </label>
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                            <div className="results"></div>
                        </div>
                    </div>

                </div>
            </div>
            );
    }
}




