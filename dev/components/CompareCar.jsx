import React from 'react';
import axios from 'axios';
import { Row, Col, DropdownButton, MenuItem, Image } from 'react-bootstrap';

export default class CompareCar extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = { 
            
            cars: [], 
            title: "Select car",
            img: "",
            price: "",
            speed: ""
        
        };

        this.changeTitle = this.changeTitle.bind(this);

    }

    componentDidMount() {

        this.serverRequest = axios.get('http://localhost:8080/cars.json').then(function(result) { 

            this.setState({ cars: result.data.cars });

        }.bind(this));

    }

    shouldComponentUpdate(nextProps, nextState) {

        return true;

    }

    changeTitle(eventKey) {

        this.setState({ 
            
            title: this.state.cars[eventKey].title,
            img: this.state.cars[eventKey].image,
            price: this.state.cars[eventKey].specs.price,
            speed: this.state.cars[eventKey].specs.speed
        
        });

    }

    render() {

        return <Row>

            <Col>

                <DropdownButton title={this.state.title} id="cars-dropdown" onSelect={this.changeTitle} >

                    {this.state.cars.map(function(car, i) {

                        return (

                            <MenuItem key={i} eventKey={i} >{car.title}</MenuItem>

                        );

                    })}

                </DropdownButton>

            </Col>

            <Col>

                <h2><strong>{this.state.title}</strong></h2>

                <Image src={this.state.img} responsive />
                
                <p>{this.state.price}</p>
                
                <p>{this.state.speed}</p>

            </Col>

        </Row>; 

    }

}
