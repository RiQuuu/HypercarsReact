import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CompareCar from './CompareCar.jsx';

export default class Compare extends React.Component {

    constructor(props, context) {

        super(props, context);

    }

    render() {

        return <Row id="compare">

            <Col md={2} className="compare-cols hide-specs">

                <Row id="specs-info">

                    <Col md={12} >

                        <p><strong>Manufacturer</strong></p><hr/>
                        <p><strong>Production</strong></p><hr/>
                        <p><strong>Assembly</strong></p><hr/>
                        <p><strong>Designer</strong></p><hr/>
                        <p><strong>Class</strong></p><hr/>
                        <p><strong>Body style</strong></p><hr/>
                        <p><strong>Layout</strong></p><hr/>
                        <p><strong>Engine</strong></p><hr/>
                        <p><strong>Consumption</strong></p><hr/>
                        <p><strong>Transmission</strong></p><hr/>
                        <p><strong>Horsepower</strong></p><hr/>
                        <p><strong>Torque</strong></p><hr/>
                        <p><strong>Top speed</strong></p><hr/>
                        <p><strong>Acceleration</strong></p><hr/>
                        <p><strong>Wheelbase</strong></p><hr/>
                        <p><strong>Length</strong></p><hr/>
                        <p><strong>Width</strong></p><hr/>
                        <p><strong>Height</strong></p><hr/>
                        <p><strong>Curb weight</strong></p><hr/>
                        <p><strong>Price</strong></p><hr/>

                    </Col>

                </Row>

            </Col>

            <Col sm={6} md={5} className="compare-cols">

                <CompareCar />

            </Col>

            <Col sm={6} md={5} className="compare-cols">

                <CompareCar />

            </Col>

        </Row>;

    }

}
