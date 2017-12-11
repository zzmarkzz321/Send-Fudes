import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="ui vertical masthead center aligned segment">
                <div className="ui container">
                    <div className="ui large secondary pointing menu">
                        <a className="toc item">
                            <i className="sidebar icon"></i>
                        </a>
                        <div className="left item">
                            <i className="food icon"></i>
                        </div>
                        <div className="right item">
                            <Link to="/about" className="item">About</Link>
                            <a className="item">Explore</a>
                            <a className="item">Blog</a>
                            <Link to="/login" className="ui button">Log in</Link>
                        </div>
                    </div>
                </div>

                <Route exact path="/" component={ App }/>
                <Route path="/about" component={ About }/>
                <Route path="/login" component={ Login }/>


                <br/><br/>
                <button className="ui button" type="submit">Send Verification Key! ✊🏻 </button>
                <br/>

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
        );
    }
};
