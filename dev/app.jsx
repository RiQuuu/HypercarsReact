import React from 'react';
import ReactDOM from 'react-dom';
import AppView from './components/AppView';

var pages = [
    { name: 'welcome', title: 'Welcome', nav: true, auth: false, default: true },
    { name: 'car', title: 'Car', nav: true, auth: false }
];

var route = 'welcome';

ReactDOM.render(
    <AppView pages={pages} route={route} />,
    document.getElementById('main')
);
