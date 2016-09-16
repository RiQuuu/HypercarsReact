import React from 'react';
import axios from 'axios';
import NavLink from './NavLink.jsx';

class CarDiv extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '',
            image: ''
        };
    }

    loadData() { 
        axios.get('http://localhost:8080/cars.json').then(function(response){
            this.setState({
                title: response.data.cars[0].title,
                image: response.data.cars[0].image
            }); 
        }.bind(this));  
    }

    componentDidMount() {
        this.loadData();  
    };

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    };

    render() {

        return <div>

            <img src={this.state.image} />

            <p>{this.state.title}</p>

        </div>;

    };

}

export default class Cars extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return <div id="cars">

            <CarDiv>

                <NavLink to='/cars/Pagani Huayra'></NavLink>

            </CarDiv>

        </div>;

    };

}
