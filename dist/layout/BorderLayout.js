'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.Header = Header;
exports.East = East;
exports.West = West;
exports.Footer = Footer;
exports.Content = Content;
exports['default'] = BorderLayout;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/
 */

function Header(props) {
    return _react2['default'].createElement(
        'div',
        { style: { flex: 'none' } },
        props.children
    );
}

function East(props) {
    return _react2['default'].createElement(
        'div',
        { style: { flex: '0 0 ' + props.width } },
        props.children
    );
}

function West(props) {
    return _react2['default'].createElement(
        'div',
        { style: { flex: '0 0 ' + props.width } },
        props.children
    );
}

function Footer(props) {
    return _react2['default'].createElement('div', { style: { flex: '0 0 ' + props.width } });
}

function Content(props) {
    return _react2['default'].createElement(
        'div',
        { style: { display: 'flex' } },
        props.children
    );
}

function BorderLayout(props) {

    return _react2['default'].createElement(
        'div',
        { style: { flexDirection: 'column', display: 'flex', minHeight: '100vh' } },
        props.children
    );
}

exports.BorderLayout = BorderLayout;