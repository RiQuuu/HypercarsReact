import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppView from './components/AppView.jsx';
import Home from './components/Home.jsx';
import Cars from './components/Cars.jsx';
import Car from './components/Car.jsx';

render((

    <Router history={browserHistory}>

        <Route path="/" component={AppView}>

            <IndexRoute component={Home}/>

            <Route path="/cars" component={Cars}>

                <Route path="/cars/:title" component={Car}/>

            </Route>

        </Route>

    </Router>

), document.getElementById('main'))
