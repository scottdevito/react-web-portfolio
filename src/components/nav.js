import React from 'react';
//import { IndexLink, Link } from 'react-router';

export const Nav = () => {
    return (
        <div className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <ul className="nav nav-pills nav-justified">
                    <li className="navbar-text" role="presentation"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li className="navbar-text" role="presentation"><a href="https://github.com/psilotec" target="_blank">GitHub</a></li>
                    <li className="navbar-text" role="presentation"><Link to="/resume" activeClassName="active">Resume</Link></li>
                    <li className="navbar-text" role="presentation"><Link to="/contact" activeClassName="active">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};