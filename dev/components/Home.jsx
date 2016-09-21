import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Home extends React.Component {

    constructor(props) {

        super(props);

    }

    static defaultProps = {

        mainTitle: "Welcome to home of cars",

        mainInfo: ""

    }
    
    static propTypes = {

        mainTitle: React.PropTypes.string.isRequired,

        mainInfo: React.PropTypes.string.isRequired

    }

    render() {

        return <Row id="home">

            <Col sm={12} md={8} mdOffset={2} >

                <h2>{this.props.mainTitle}</h2>

                <p>{this.props.mainInfo}</p>

            </Col>

        </Row>;

    }

}
