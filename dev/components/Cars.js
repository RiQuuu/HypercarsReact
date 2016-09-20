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

var _reactBootstrap = require('react-bootstrap');

var _NavLinkJsx = require('./NavLink.jsx');

var _NavLinkJsx2 = _interopRequireDefault(_NavLinkJsx);

var Cars = (function (_React$Component) {
    _inherits(Cars, _React$Component);

    function Cars(props, context) {
        _classCallCheck(this, Cars);

        _get(Object.getPrototypeOf(Cars.prototype), 'constructor', this).call(this, props, context);
        this.state = {
            cars: []
        };
    }

    _createClass(Cars, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var th = this;

            this.serverRequest = _axios2['default'].get('http://localhost:8080/cars.json').then((function (result) {
                th.setState({
                    cars: result.data.cars
                });
            }).bind(this));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.serverRequest.abort;
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return true;
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2['default'].createElement(
                _reactBootstrap.Row,
                { id: 'cars' },
                this.state.cars.map(function (car, i) {

                    var titleName = '/cars/' + car.title;

                    return _react2['default'].createElement(
                        _reactBootstrap.Col,
                        { xs: 6, md: 4, key: i },
                        _react2['default'].createElement(
                            _NavLinkJsx2['default'],
                            { key: i, to: titleName },
                            _react2['default'].createElement(
                                'div',
                                { className: 'carthumb-holder', key: i },
                                _react2['default'].createElement(_reactBootstrap.Image, { src: car.image, responsive: true }),
                                _react2['default'].createElement(
                                    'h3',
                                    null,
                                    car.title
                                )
                            )
                        )
                    );
                })
            );
        }
    }]);

    return Cars;
})(_react2['default'].Component);

exports['default'] = Cars;
module.exports = exports['default'];