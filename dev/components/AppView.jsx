import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import NavLink from './NavLink.jsx';

export default class AppView extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { title: '' };
    }

    loadData() { 
        axios.get('http://localhost:8080/cars.json').then(function(response){
            this.setState({ title: response.data.cars[0].title }); 
        }.bind(this));  
    }

    componentDidMount() {
        this.loadData();
    };

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    };


    render() {

        let titleName = '/cars/' + this.state.title;

        let currentLocation = this.props.location.pathname;

        let position;

        if( currentLocation == '/' || currentLocation == '/cars' ) {

            position = this.props.children

        } else {

            position = this.props.children.props.children

        }

        return <div id="page">

            <nav className="navbar">
                <div className="brand">
                    <Link to="/"><h1>ReactTest</h1></Link>
                </div>              
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/cars">Cars</NavLink></li>
                    <ul role="nav">
                        <li><NavLink to={titleName}>{this.state.title}</NavLink></li>
                    </ul>
                </ul>
            </nav>

            {position}

        </div>;

    }

}
