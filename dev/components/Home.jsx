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

                <h2>{this.props.mainTitle}</h2>

                <Row>

                    {this.state.news.map(function(headlines, i) {

                        /*const pubTime = headlines.publishedDateJS;

                        const from = pubTime.split("T");

                        const date = from[0].split("-");

                        const time = from[1].split(":");

                        const seconds = time[2].split(".");

                        const milliseconds = seconds[1].slice(0, -1);

                        let f = new Date(date[0], date[1], date[2], time[0], time[1], seconds[0], milliseconds);

                        console.log(f);*/

                        return (

                            <Col xs={12} sm={6} md={3} key={i}>

                                <a href={headlines.link} key={i} target="_blank">

                                    <Well className="news-holder" key={i}>

                                        <p>{headlines.author}</p>

                                        <h4>{headlines.title}</h4>
                                        
                                        <p className="publishDate">{headlines.publishedDate}</p>

                                        {/*<PublishTime data={f} />*/}

                                    </Well>

                                </a>

                            </Col>

                        );
                    })}

                </Row>

            </Col>

        </Row>;

    }

}

/*export default class PublishTime extends React.Component {
    
    render() {

    return <p className="publishDate">{this.props.data}</p>;
        
    }

}*/
