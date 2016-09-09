import React from 'react';
import ReactDOM from 'react-dom';
import HeadText from './components/headText';
import BodyText from './components/bodyText';

class MainWrapp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <article className="row large-6">

            <HeadText {...this.state} />

            <BodyText {...this.props} />

        </article>;
    }
}

ReactDOM.render(
    <MainWrapp />,
    document.getElementById('main')
);
