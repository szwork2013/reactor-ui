'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _baseStyle = require('./baseStyle');

var styles = {

    base: {
        color: 'inherit',
        display: 'inline',
        padding: '1px 5px',
        borderRadius: 2,
        border: '1px solid #EEE',
        margin: 2
    },

    large: {
        fontSize: 14,
        padding: '2px 8px'
    }
};

_baseStyle.schemes.forEach(function (scheme) {
    styles[scheme] = {
        color: '#FFF',
        border: '1px solid ' + _baseStyle.colors[scheme].clone().darken(0.08).hexString(),
        backgroundColor: _baseStyle.colors[scheme].hexString()
    };
});

var SIZE = {
    large: 'large'
};

var Pill = (0, _radium2['default'])(_react2['default'].createClass({

    propTypes: {
        size: _react2['default'].PropTypes.oneOf([SIZE.large])
    },

    render: function render() {
        var scheme = this.props.scheme;
        var size = this.props.size;

        return _react2['default'].createElement(
            'div',
            { style: [styles.base, styles[scheme], size === SIZE.large ? styles.large : {}] },
            this.props.children
        );
    }

}));

exports['default'] = Pill;
module.exports = exports['default'];