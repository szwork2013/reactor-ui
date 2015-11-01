'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Action = _react2['default'].createClass({
    displayName: 'Action',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { style: { display: 'inline-block', padding: "0px 2px" } },
            this.props.children
        );
    }
});

exports['default'] = Action;
module.exports = exports['default'];