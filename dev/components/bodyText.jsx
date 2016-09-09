import React from 'react';

export default class BodyText extends React.Component {

    static propTypes = {
        text: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        text: 'Undefined'
    };

    state = {

    };

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="column body-text">

                <p></p>

            </div>
            
    }
}