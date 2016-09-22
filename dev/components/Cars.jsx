import React from 'react';
import axios from 'axios';
import { Row, Col, Image, Thumbnail } from 'react-bootstrap';
import NavLink from './NavLink.jsx';

export default class Cars extends React.Component {

    constructor(props, context) {
        
        super(props, context);
        
        this.state = { cars: [] };
        
    }

    componentDidMount() {
        
        this.serverRequest = axios.get('http://localhost:8080/cars.json').then(function(result) {   
            
            this.setState({ cars: result.data.cars });
            
        }.bind(this));
        
    }

    componentWillUnmount() {
        
        this.serverRequest.abort;
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        return true;
        
    }

    render() {

        return <Row id="cars">

            {this.state.cars.map(function(car, i) {

                let titleName = '/cars/' + car.title;

                return (        

                    <Col xs={12} sm={6} md={4} key={i}>

                        <NavLink key={i} to={titleName}>

                            <Thumbnail src={car.image} className="carthumb-holder" key={i}>

                                <h3>{car.title}</h3>

                            </Thumbnail>

                        </NavLink>

                    </Col>

                );
            })}

        </Row>;

    }

}
