/* jshint -W097*/
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Pill = _react2['default'].createClass({
    displayName: 'Pill',

    render: function render() {
        var scheme = this.props.scheme;
        var size = this.props.size;
        var classNames = (0, _classnames2['default'])('rui-pill', { 'rui-pill-green': scheme === 'green' }, { 'rui-pill-blue': scheme === 'blue' }, { 'rui-pill-violet': scheme === 'violet' }, { 'rui-pill-red': scheme === 'red' }, { 'rui-pill-orange': scheme === 'orange' }, { 'rui-pill-large': size === 'lg' });
        return _react2['default'].createElement(
            'div',
            { className: classNames },
            this.props.children
        );
    }

});

exports['default'] = Pill;
module.exports = exports['default'];