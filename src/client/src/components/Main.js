import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import { Home, About, Login, Forgot, Registration } from './pages';

export class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/about" component={ About }/>
                    <Route path="/login" component={ Login }/>
                    <Route path="/register" component={ Registration }/>
                    <Route path="/forgot-password" component={ Forgot }/>
                </Switch>
            </main>
        )
    }
}

