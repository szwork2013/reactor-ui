'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

//nasty color is mutable

var GREEN_COLOR = (0, _color2['default'])('#1abc9c');
var BLUE_COLOR = (0, _color2['default'])('#3498db');
var VIOLET_COLOR = (0, _color2['default'])('#9b59b6');
var RED_COLOR = (0, _color2['default'])('#e74c3c');
var ORANGE_COLOR = (0, _color2['default'])('#e67e22');
var GRAY_COLOR = (0, _color2['default'])('#ecf0f1');

var green = GREEN_COLOR.hexString();
var blue = BLUE_COLOR.hexString();
var red = RED_COLOR.hexString();
var orange = ORANGE_COLOR.hexString();
var gray = GRAY_COLOR.hexString();
var violet = VIOLET_COLOR.hexString();

var styles = {
    green: {
        backgroundColor: green
    },
    blue: {
        backgroundColor: blue
    },
    red: {
        backgroundColor: red
    },
    violet: {
        backgroundColor: violet
    },
    orange: {
        backgroundColor: orange
    },
    gray: {
        backgroundColor: gray
    }

};
var schemes = ['green', 'blue', 'red', 'violet', 'orange', 'gray'];

var colors = {
    green: GREEN_COLOR,
    blue: BLUE_COLOR,
    red: RED_COLOR,
    violet: VIOLET_COLOR,
    orange: ORANGE_COLOR,
    gray: GRAY_COLOR
};
exports.schemes = schemes;
exports.colors = colors;
exports.styles = styles;
exports['default'] = styles;