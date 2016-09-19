import React from 'react';
import axios from 'axios';
import { Grid, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import NavLink from './NavLink.jsx';

export default class AppView extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { 
            carID: '',
            title: '' 
        };
    }

    loadData() { 
        axios.get('http://localhost:8080/cars.json').then(function(response){
            this.setState({ 
                carID: response.data.cars[0].carID,
                title: response.data.cars[0].title 
            }); 
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

        return <Grid id="page" fluid >

            <Navbar className="navbar" fixedTop inverse fluid >
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">ReactTest</Link>
                    </Navbar.Brand>
                </Navbar.Header> 
                <ul className="nav-links">
                    <li><NavLink to= "/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/cars">Cars</NavLink></li>
                    <ul>
                        <li><NavLink key={this.state.carID} to={titleName}>{this.state.title}</NavLink></li>
                    </ul>
                </ul>
            </Navbar>

            <Grid className="content">

                {position}

            </Grid>

        </Grid>;

    }

}
