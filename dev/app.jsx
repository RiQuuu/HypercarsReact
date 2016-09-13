import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppView from './components/AppView';
import Home from './components/Home';
import Cars from './components/Cars';
import Car from './components/Car';

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
