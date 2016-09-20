import React from 'react';
import axios from 'axios';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import NavLink from './NavLink.jsx';

export default class Cars extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            cars: []
        };
    }

    componentDidMount() {
        var th = this;

        this.serverRequest = axios.get('http://localhost:8080/cars.json').then(function(result) {    
            th.setState({
                cars: result.data.cars
            });
        }.bind(this));
    };

    componentWillUnmount() {
        this.serverRequest.abort;
    };

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    };

    render() {

        return <Row id="cars">

            {this.state.cars.map(function(car, i) {

                let titleName = '/cars/' + car.title;

                return (        

                    <Col xs={6} md={4} key={i}>

                        <NavLink key={i} to={titleName}>

                            <div className="carthumb-holder" key={i}>

                                <Image src={car.image} responsive />

                                <h3>{car.title}</h3>

                            </div>

                        </NavLink>

                    </Col>

                );
            })}

        </Row>;

    };

}
