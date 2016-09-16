'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = require('react-router');

var _NavLinkJsx = require('./NavLink.jsx');

var _NavLinkJsx2 = _interopRequireDefault(_NavLinkJsx);

var AppView = (function (_React$Component) {
    _inherits(AppView, _React$Component);

    function AppView(props, context) {
        _classCallCheck(this, AppView);

        _get(Object.getPrototypeOf(AppView.prototype), 'constructor', this).call(this, props, context);
        this.state = { title: '' };
    }

    _createClass(AppView, [{
        key: 'loadData',
        value: function loadData() {
            _axios2['default'].get('http://localhost:8080/cars.json').then((function (response) {
                this.setState({ title: response.data.cars[0].title });
            }).bind(this));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadData();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return true;
        }
    }, {
        key: 'render',
        value: function render() {

            var titleName = '/cars/' + this.state.title;

            var currentLocation = this.props.location.pathname;

            var position = undefined;

            if (currentLocation == '/' || currentLocation == '/cars') {

                position = this.props.children;
            } else {

                position = this.props.children.props.children;
            }

            return _react2['default'].createElement(
                'div',
                { id: 'page' },
                _react2['default'].createElement(
                    'nav',
                    { className: 'navbar' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'brand' },
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/' },
                            _react2['default'].createElement(
                                'h1',
                                null,
                                'ReactTest'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'ul',
                        { role: 'nav' },
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _NavLinkJsx2['default'],
                                { to: '/', onlyActiveOnIndex: true },
                                'Home'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _NavLinkJsx2['default'],
                                { to: '/cars' },
                                'Cars'
                            )
                        ),
                        _react2['default'].createElement(
                            'ul',
                            { role: 'nav' },
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    _NavLinkJsx2['default'],
                                    { to: titleName },
                                    this.state.title
                                )
                            )
                        )
                    )
                ),
                position
            );
        }
    }]);

    return AppView;
})(_react2['default'].Component);

exports['default'] = AppView;
module.exports = exports['default'];