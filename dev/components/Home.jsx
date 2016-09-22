import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Home extends React.Component {

    constructor(props) {

        super(props);

    }

    static defaultProps = {

        mainTitle: "Welcome to home of cars"

    }
    
    static propTypes = {

        mainTitle: React.PropTypes.string.isRequired

    }

    render() {

        return <Row id="home">

            <Col sm={12} md={8} mdOffset={2} >

                <h2>{this.props.mainTitle}</h2>

            </Col>

        </Row>;

    }

}
