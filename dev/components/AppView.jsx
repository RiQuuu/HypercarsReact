import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import NavLink from './NavLink.jsx';
import Cars from './Cars.jsx';

export default class AppView extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return <div id="page">

            <nav className="navbar">
                <div className="brand">
                    <Link to="/"><h1>ReactTest</h1></Link>
                </div>              
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/cars">Cars</NavLink></li>
                    <Cars />
                </ul>                
            </nav>

            {this.props.children.props.children}

        </div>;

    }

}
