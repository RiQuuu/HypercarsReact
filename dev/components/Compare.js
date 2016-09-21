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

var _reactBootstrap = require('react-bootstrap');

var _CompareCarJsx = require('./CompareCar.jsx');

var _CompareCarJsx2 = _interopRequireDefault(_CompareCarJsx);

var Compare = (function (_React$Component) {
    _inherits(Compare, _React$Component);

    function Compare(props, context) {
        _classCallCheck(this, Compare);

        _get(Object.getPrototypeOf(Compare.prototype), 'constructor', this).call(this, props, context);
    }

    _createClass(Compare, [{
        key: 'render',
        value: function render() {

            return _react2['default'].createElement(
                _reactBootstrap.Row,
                { id: 'compare' },
                _react2['default'].createElement(
                    _reactBootstrap.Col,
                    { md: 6 },
                    _react2['default'].createElement(_CompareCarJsx2['default'], null)
                ),
                _react2['default'].createElement(
                    _reactBootstrap.Col,
                    { md: 6 },
                    _react2['default'].createElement(_CompareCarJsx2['default'], null)
                )
            );
        }
    }]);

    return Compare;
})(_react2['default'].Component);

exports['default'] = Compare;
module.exports = exports['default'];