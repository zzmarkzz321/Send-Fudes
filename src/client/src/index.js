/*
    ./client/index.js
*/
import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import './styles/styles.css';

// TODO Include Scss here

render (
    <App/>,
    document.getElementById('root')
);