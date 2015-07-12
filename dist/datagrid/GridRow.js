/*globals require,module */
/* jshint -W097, esnext: true */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 * This is a grid row.. duh!
 *
 */
var GridRow = _react2['default'].createClass({
    displayName: 'GridRow',

    render: function render() {
        var clsName = (0, _classnames2['default'])({ 'rui-dt-colcont': this.props.header === true }, { 'rui-dt-rowcont': !this.props.header });
        return _react2['default'].createElement(
            'div',
            { className: clsName },
            this.props.children
        );
    }

});

module.exports = GridRow;