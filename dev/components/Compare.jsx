import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CompareCar from './CompareCar.jsx';

export default class Compare extends React.Component {

    constructor(props, context) {

        super(props, context);

    }

    render() {
        
        console.log(...this.props);

        return <Row id="compare">

            <Col xs={2} className="compare-cols">

                <Row id="specs-info">

                    <Col>
                        
                        <p><strong>Manufacturer</strong></p>
                        <p><strong>Production</strong></p>
                        <p><strong>Assembly</strong></p>
                        <p><strong>Designer</strong></p>
                        <p><strong>Class</strong></p>
                        <p><strong>Body style</strong></p>
                        <p><strong>Layout</strong></p>
                        <p><strong>Engine</strong></p>
                        <p><strong>Consumption</strong></p>
                        <p><strong>Transmission</strong></p>
                        <p><strong>Horsepower</strong></p>
                        <p><strong>Torque</strong></p>
                        <p><strong>Top speed</strong></p>
                        <p><strong>Acceleration</strong></p>
                        <p><strong>Wheelbase</strong></p>
                        <p><strong>Length</strong></p>
                        <p><strong>Width</strong></p>
                        <p><strong>Height</strong></p>
                        <p><strong>Curb weight</strong></p>
                        <p><strong>Price</strong></p>

                    </Col>

                </Row>

            </Col>

            <Col xs={5} className="compare-cols">

                <CompareCar />

            </Col>

            <Col xs={5} className="compare-cols">

                <CompareCar />

            </Col>

        </Row>;

    }

}
