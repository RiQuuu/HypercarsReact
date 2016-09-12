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

var _lodashFpAssign = require('lodash/fp/assign');

var _lodashFpAssign2 = _interopRequireDefault(_lodashFpAssign);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Welcome = require('./Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Car = require('./Car');

var _Car2 = _interopRequireDefault(_Car);

var AppView = (function (_React$Component) {
    _inherits(AppView, _React$Component);

    function AppView(props) {
        _classCallCheck(this, AppView);

        _get(Object.getPrototypeOf(AppView.prototype), 'constructor', this).call(this, props);
        this.state = (0, _lodashFpAssign2['default'])({}, this.props);
    }

    _createClass(AppView, [{
        key: 'render',
        value: function render() {
            var Route = undefined;

            switch (this.state.route) {
                case 'welcome':
                    Route = _Welcome2['default'];
                    break;
                case 'car':
                    Route = _Car2['default'];
                    break;
                default:
                    Route = _Welcome2['default'];
            }

            return _react2['default'].createElement(
                'div',
                { className: 'row large-6', id: 'pagehost' },
                _react2['default'].createElement(_NavBar2['default'], { pages: this.state.pages, route: this.state.route }),
                _react2['default'].createElement(Route, null)
            );
        }
    }]);

    return AppView;
})(_react2['default'].Component);

exports['default'] = AppView;

AppView.propTypes = {
    pages: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        auth: _react2['default'].PropTypes.bool,
        nav: _react2['default'].PropTypes.bool,
        name: _react2['default'].PropTypes.string.isRequired,
        title: _react2['default'].PropTypes.string.isRequired
    })).isRequired,
    route: _react2['default'].PropTypes.string.isRequired
};
module.exports = exports['default'];