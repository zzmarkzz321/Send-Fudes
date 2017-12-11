import React, { Component } from 'react';

export const Navigation = () => (
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
);