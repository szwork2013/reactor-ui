
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ActionBar = _react2['default'].createClass({
    displayName: 'ActionBar',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { style: this.props.style },
            this.props.children
        );
    }
});

exports['default'] = ActionBar;
module.exports = exports['default'];