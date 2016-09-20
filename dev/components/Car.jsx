import React from 'react';
import axios from 'axios';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class Car extends React.Component {

    constructor(props, context) {

        super(props, context);
        this.state = { car: [] };

    }

    loadContent() {

        axios.get('http://localhost:8080/cars.json').then(function(result) {

            for( var i = 0; i < result.data.cars.length; i++ ) {

                if( result.data.cars[i].title == this.props.params.title ) {

                    this.setState({ car: result.data.cars[i] });

                    break;

                }

            }

        }.bind(this));

    }

    componentDidMount() {

        this.loadContent();

    };

    componentWillReceiveProps() {

        this.loadContent();

    };

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    };

    render() {

        return <div id="car" className="column head-text">

            <h2><strong>{this.props.params.title}</strong></h2>

            <Image src={this.state.car.image} responsive />

            <p className="lead">{this.state.car.desc}</p>

            <p className="body-text">{this.state.car.text}</p>

        </div>;

    }
}
