'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _componentsAppViewJsx = require('./components/AppView.jsx');

var _componentsAppViewJsx2 = _interopRequireDefault(_componentsAppViewJsx);

var _componentsHomeJsx = require('./components/Home.jsx');

var _componentsHomeJsx2 = _interopRequireDefault(_componentsHomeJsx);

var _componentsCarsJsx = require('./components/Cars.jsx');

var _componentsCarsJsx2 = _interopRequireDefault(_componentsCarsJsx);

var _componentsCarJsx = require('./components/Car.jsx');

var _componentsCarJsx2 = _interopRequireDefault(_componentsCarJsx);

(0, _reactDom.render)(_react2['default'].createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2['default'].createElement(
        _reactRouter.Route,
        { path: '/', component: _componentsAppViewJsx2['default'] },
        _react2['default'].createElement(_reactRouter.IndexRoute, { component: _componentsHomeJsx2['default'] }),
        _react2['default'].createElement(
            _reactRouter.Route,
            { path: '/cars', component: _componentsCarsJsx2['default'] },
            _react2['default'].createElement(_reactRouter.Route, { path: '/cars/:title', component: _componentsCarJsx2['default'] })
        )
    )
), document.getElementById('main'));