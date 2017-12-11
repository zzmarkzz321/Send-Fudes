import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import { Home, About, Login } from './pages';

export class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/about" component={ About }/>
                    <Route path="/login" component={ Login }/>
                </Switch>
            </main>
        )
    }
}

