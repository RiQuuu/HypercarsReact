import React from 'react';

export default class HeadText extends React.Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        title: 'Undefined',
        desc: 'Undefined'
    };

    state = {

    };

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="column head-text">

                <h2><strong>{this.props.title}</strong></h2>
                
                <img src={this.props.image}/>
                
                <p className="lead">{this.props.desc}</p>

            </div>
            
    }
}
