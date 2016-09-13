import React from 'react';
import NavLink from './NavLink';

export default class AppView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <div id="navbar">

            <div id="navbrand">
                <h1>Cars</h1>
            </div>
            
            <ul role="nav">
                <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                <li><NavLink to="/cars">Cars</NavLink></li>
            </ul>

            {this.props.children}

        </div>;

    }

}
