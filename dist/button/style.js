'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _baseStyle = require('../baseStyle');

var BtnStyles = {
    Btn: {
        color: 'inherit',
        border: '1px solid #EEE',
        backgroundColor: '#FFF',
        display: 'inline-block',
        padding: '5px 10px',
        fontSize: 12,
        lineHeight: 1.5,
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        cursor: 'pointer',
        fontWeight: 700
    },
    BtnDisabled: {
        pointerEvents: 'none',
        cursor: 'not-allowed',
        filter: 'alpha(opacity=65)',
        opacity: 0.65
    }
};

_baseStyle.schemes.forEach(function (scheme) {
    BtnStyles[scheme] = {
        color: '#FFF',
        border: '1px solid ' + _baseStyle.colors[scheme].clone().darken(0.1).hexString()
    };
    BtnStyles[scheme + 'Hovered'] = {
        backgroundColor: _baseStyle.colors[scheme].clone().darken(0.05).hexString()
    };
    BtnStyles[scheme + 'Active'] = {
        backgroundColor: _baseStyle.colors[scheme].clone().darken(0.15).hexString()
    };
});

exports['default'] = BtnStyles;
module.exports = exports['default'];