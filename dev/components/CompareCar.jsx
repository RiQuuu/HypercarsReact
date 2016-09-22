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
            manufacturer: "",
            production: "",
            assembly: "",
            designer: "",
            class: "",
            bodystyle: "",
            layout: "",
            engine: "",
            consumption: "",
            transmission: "",
            horsepower: "",
            torque: "",
            speed: "",
            acceleration: "",
            wheelbase: "",
            length: "",
            width: "",
            height: "",
            curbweight: "",
            price: ""

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
            manufacturer: this.state.cars[eventKey].specs.manufacturer,
            production: this.state.cars[eventKey].specs.production,
            assembly: this.state.cars[eventKey].specs.assembly,
            designer: this.state.cars[eventKey].specs.designer,
            class: this.state.cars[eventKey].specs.class,
            bodystyle: this.state.cars[eventKey].specs.bodystyle,
            layout: this.state.cars[eventKey].specs.layout,
            engine: this.state.cars[eventKey].specs.engine,
            consumption: this.state.cars[eventKey].specs.consumption,
            transmission: this.state.cars[eventKey].specs.transmission,
            horsepower: this.state.cars[eventKey].specs.horsepower,
            torque: this.state.cars[eventKey].specs.torque,
            speed: this.state.cars[eventKey].specs.speed,
            acceleration: this.state.cars[eventKey].specs.acceleration,
            wheelbase: this.state.cars[eventKey].specs.wheelbase,
            length: this.state.cars[eventKey].specs.length,
            width: this.state.cars[eventKey].specs.width,
            height: this.state.cars[eventKey].specs.height,
            curbweight: this.state.cars[eventKey].specs.curbweight,
            price: this.state.cars[eventKey].specs.price

        });

    }

    render() {

        return <Row id="compare-car">

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

                <p>{this.state.manufacturer}</p>
                <p>{this.state.production}</p>
                <p>{this.state.assembly}</p>
                <p>{this.state.designer}</p>
                <p>{this.state.class}</p>
                <p>{this.state.bodystyle}</p>
                <p>{this.state.layout}</p>
                <p>{this.state.engine}</p>
                <p>{this.state.consumption}</p>
                <p>{this.state.transmission}</p>
                <p>{this.state.horsepower}</p>
                <p>{this.state.torque}</p>
                <p>{this.state.speed}</p>
                <p>{this.state.acceleration}</p>
                <p>{this.state.wheelbase}</p>
                <p>{this.state.length}</p>
                <p>{this.state.width}</p>
                <p>{this.state.height}</p>
                <p>{this.state.curbweight}</p>
                <p>{this.state.price}</p>

            </Col>

        </Row>; 

    }

}
