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

var CompareCar = (function (_React$Component) {
    _inherits(CompareCar, _React$Component);

    function CompareCar(props, context) {
        _classCallCheck(this, CompareCar);

        _get(Object.getPrototypeOf(CompareCar.prototype), 'constructor', this).call(this, props, context);

        this.state = {

            cars: [],
            title: "Select car",
            img: "",
            price: "",
            speed: ""

        };

        this.changeTitle = this.changeTitle.bind(this);
    }

    _createClass(CompareCar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.serverRequest = _axios2['default'].get('http://localhost:8080/cars.json').then((function (result) {

                this.setState({ cars: result.data.cars });
            }).bind(this));
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {

            return true;
        }
    }, {
        key: 'changeTitle',
        value: function changeTitle(eventKey) {

            this.setState({

                title: this.state.cars[eventKey].title,
                img: this.state.cars[eventKey].image,
                price: this.state.cars[eventKey].specs.price,
                speed: this.state.cars[eventKey].specs.speed

            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2['default'].createElement(
                _reactBootstrap.Row,
                null,
                _react2['default'].createElement(
                    _reactBootstrap.Col,
                    null,
                    _react2['default'].createElement(
                        _reactBootstrap.DropdownButton,
                        { title: this.state.title, id: 'cars-dropdown', onSelect: this.changeTitle },
                        this.state.cars.map(function (car, i) {

                            return _react2['default'].createElement(
                                _reactBootstrap.MenuItem,
                                { key: i, eventKey: i },
                                car.title
                            );
                        })
                    )
                ),
                _react2['default'].createElement(
                    _reactBootstrap.Col,
                    null,
                    _react2['default'].createElement(
                        'h2',
                        null,
                        _react2['default'].createElement(
                            'strong',
                            null,
                            this.state.title
                        )
                    ),
                    _react2['default'].createElement(_reactBootstrap.Image, { src: this.state.img, responsive: true }),
                    _react2['default'].createElement(
                        'p',
                        null,
                        this.state.price
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        this.state.speed
                    )
                )
            );
        }
    }]);

    return CompareCar;
})(_react2['default'].Component);

exports['default'] = CompareCar;
module.exports = exports['default'];