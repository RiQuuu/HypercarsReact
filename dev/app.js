'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentsAppView = require('./components/AppView');

var _componentsAppView2 = _interopRequireDefault(_componentsAppView);

var pages = [{ name: 'welcome', title: 'Welcome', nav: true, auth: false, 'default': true }, { name: 'car', title: 'Car', nav: true, auth: false }];

var route = 'welcome';

_reactDom2['default'].render(_react2['default'].createElement(_componentsAppView2['default'], { pages: pages, route: route }), document.getElementById('main'));