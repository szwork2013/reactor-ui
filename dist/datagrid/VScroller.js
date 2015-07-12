
/* jshint -W097 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Listen to mouse drag , mousewheel andkeyboard arrowkeys
 *
 */
var VScroller = _react2['default'].createClass({
    displayName: 'VScroller',

    _onWheel: function _onWheel(e) {},

    scrolling: function scrolling() {},

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { onWheel: this._onWheel, style: { height: this.props.height, width: 16, backgroundColor: '#EEE' }, className: 'rui-dg-vscroller' },
            _react2['default'].createElement('div', { style: { borderRadius: 2, margin: 3, backgroundColor: '#959595', width: 10, height: 30 } })
        );
    }

});

exports['default'] = VScroller;
module.exports = exports['default'];