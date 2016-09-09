import React from 'react';
import axios from 'axios';

export default class HeadText extends React.Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        title: 'Undefined',
        image: 'Undefined',
        desc: 'Undefined'
    };

    constructor(props) {
        super(props);
        this.state = {
            cars: [{
                title: "Loading data...",
                image: "Loading data...",
                desc: "Loading data..."
            }]  
        };
    }

    loadData() {
        axios.get('//localhost:8080/cars.json').then((response) => {
            this.setState({
                cars: response.data
            }) 
        });
    }

    componentWillMount() {
        this.loadData();  
    };
    componentDidMount() {};
    componentWillReceiveProps(nextProps) {};
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    };
    componentWillUpdate(nextProps, nextState) {};
    componentDidUpdate(prevProps, prevState) {};
    componentWillUnmount() {};

    render() {
        return <div className="column head-text">

            <h2><strong>{this.state.cars.title}</strong></h2>

            <img src={this.state.cars.image} />

            <p className="lead">{this.state.cars.desc}</p>

        </div>

    }
}
