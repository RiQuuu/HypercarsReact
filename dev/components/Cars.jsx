import React from 'react';
import axios from 'axios';
import { Row, Col, Image, Thumbnail } from 'react-bootstrap';
import NavLink from './NavLink.jsx';

export default class Cars extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {     
            cars: [], 
            searchString: ''
        };

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

    handleChange(e) {

        this.setState({ searchString: e.target.value });

    }

    render() {

        let libraries = this.state.cars;

        let searchString = this.state.searchString.trim().toLowerCase();

        if( searchString.length > 0 ) {

            libraries = libraries.filter(function(car){

                return car.title.toLowerCase().match( searchString );

            });

        }

        return <Row id="cars">

            <Col sm={12}>

                <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Type here" />

            </Col>

            {libraries.map(function(car, i) {

                let titleName = '/cars/' + car.title;

                return (        

                    <Col sm={12} md={4} lg={3} key={i} id={car.title} >

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
