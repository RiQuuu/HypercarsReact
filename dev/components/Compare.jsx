import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CompareCar from './CompareCar.jsx';

export default class Compare extends React.Component {

    constructor(props, context) {

        super(props, context);

    }

    render() {

        return <Row id="compare">

            <Col md={6}>

                <CompareCar />

            </Col>

            <Col md={6}>

                <CompareCar />

            </Col>

        </Row>;

    }

}
