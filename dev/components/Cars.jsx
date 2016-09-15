import React from 'react';
import axios from 'axios';
import NavLink from './NavLink.jsx';

export default class Cars extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { title: '' };
    }

    loadData() { 
        axios.get('http://localhost:8080/cars.json').then(function(response){
            this.setState({ title: response.data.cars[0].title }); 
        }.bind(this));  
    }

    componentDidMount() {
        this.loadData();  
    };

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    };

    render() {

        let titleName = '/cars/' + this.state.title;

        return <div>

            <ul role="nav">
                <li><NavLink to={titleName}>{this.state.title}</NavLink></li>
            </ul>

        </div>;

    };

}
