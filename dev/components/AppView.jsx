import React from 'react';
import axios from 'axios';
import { Grid, Row, Col, Navbar, Nav, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import NavLink from './NavLink.jsx';

export default class AppView extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = { cars: [], showResults: false };

        this.showCars = this.showCars.bind(this);

    }

    showCars() {

        this.setState({ showResults: !this.state.showResults });

    }

    componentDidMount() {

        this.serverRequest = axios.get('http://localhost:8080/cars.json').then(function(result) { 

            this.setState({ cars: result.data.cars });

        }.bind(this));

    }

    componentWillUnmount() {

        this.serverRequest.abort();

    }

    shouldComponentUpdate(nextProps, nextState) {

        return true;

    }

    render() {

        let currentLocation = this.props.location.pathname;

        let position;

        if( currentLocation == '/' || currentLocation == '/cars' || currentLocation == '/compare' ) {

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
                    
                    <li>
                        <NavLink to="/cars">Cars<Glyphicon glyph="glyphicon glyphicon-chevron-down" onClick={this.showCars} /></NavLink>
                    </li>

                    { this.state.showResults ? <ul>

                        {this.state.cars.map(function(car, i) {

                            let titleName = '/cars/' + car.title;

                            return (

                                <li key={i}>

                                    <NavLink key={i} to={titleName}>{car.title}</NavLink>

                                </li>

                            );

                        })}

                    </ul> : null }

                    <li><NavLink to="/compare">Compare</NavLink></li>

                </ul>

            </Navbar>

            <Grid className="content">

                {position}

            </Grid>

        </Grid>;

    }

}
