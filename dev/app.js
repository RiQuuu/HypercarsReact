'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentsCartItem = require('./components/cartItem');

var _componentsCartItem2 = _interopRequireDefault(_componentsCartItem);

var order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

_reactDom2['default'].render(_react2['default'].createElement(_componentsCartItem2['default'], { title: order.title,
    image: order.image,
    initialQty: order.initialQty,
    price: order.price }), document.getElementById('main'));