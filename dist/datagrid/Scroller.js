'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Scroller = _react2['default'].createClass({
    displayName: 'Scroller',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { style: { position: 'relative' } },
            this.props.children
        );
    }
});

exports['default'] = Scroller;
module.exports = exports['default'];