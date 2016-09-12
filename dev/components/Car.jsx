import React from 'react';
import axios from 'axios';

export default class Car extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '',
            image: '',
            desc: '',
            text: ''
        };
    }

    loadData() { 
        axios.get('http://localhost:8080/cars.json').then(function(response){
            this.setState({
                title: response.data.cars[0].title,
                image: response.data.cars[0].image,
                desc: response.data.cars[0].desc,
                text: response.data.cars[0].text
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
        return <section id="car" className="column head-text">

            <h2><strong>{this.state.title}</strong></h2>

            <img src={this.state.image} />

            <p className="lead">{this.state.desc}</p>
            
            <p className="body-text">{this.state.text}</p>

        </section>

    }
}
