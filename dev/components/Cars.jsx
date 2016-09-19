import React from 'react';
import axios from 'axios';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import NavLink from './NavLink.jsx';

class CarDiv extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '',
            image: ''
        };
    }

    loadData() { 
        axios.get('http://localhost:8080/cars.json').then(function(response){
            this.setState({
                title: response.data.cars[0].title,
                image: response.data.cars[0].image
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

        return <div className="carthumb-holder">

            <Image src={this.state.image} responsive />

            <h3>{this.state.title}</h3>

        </div>;

    };

}

export default class Cars extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return <Row id="cars">

            <Col xs={6} md={4}>

                <NavLink to='/cars/Pagani Huayra'><CarDiv/></NavLink>

            </Col>

        </Row>;

    };

}
