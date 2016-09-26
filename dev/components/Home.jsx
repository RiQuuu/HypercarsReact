import React from 'react';
import update from 'react-addons-update';
import { Row, Col, Well } from 'react-bootstrap';

export default class Home extends React.Component {


    constructor(props) {

        super(props);

        this.state = { news: [] };

    }

    static defaultProps = {

        mainTitle: "Welcome to home of cars"

    }

    static propTypes = {

        mainTitle: React.PropTypes.string.isRequired

    }

    componentDidMount() {

        $.ajax({
            type: 'GET',
            url: 'http://high.fi/liikenne/json',
            jsonpCallback: 'callback',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(data) {

                this.setState({ news: data.responseData.feed.entries });

            }.bind(this),
            error: function(e) {
                console.log('error', e);
            }
        });

    }

    render() {
        const times = [];

        return <Row id="home">

            <Col xs={12} >

                <h2><strong>{this.props.mainTitle}</strong></h2>

            </Col>

            {this.state.news.map(function(headlines, i) {

                return (

                    <Col sm={12} md={4} key={i}>

                        <a href={headlines.link} key={i} target="_blank">

                            <Well className="news-holder" key={i}>

                                <p>{headlines.author}</p>

                                <h4>{headlines.title}</h4>

                                <p className="publishDate">{headlines.publishedDate}</p>

                            </Well>

                        </a>

                    </Col>

                );
            })}

        </Row>;

    }

}
