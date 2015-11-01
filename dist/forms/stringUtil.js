"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var upperCaseFirstLetter = function upperCaseFirstLetter(text) {
    if (text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
};
var createLabel = function createLabel(labelText) {

    if (labelText) {
        return upperCaseFirstLetter(labelText.split('').map(function (ch) {
            if (ch === ch.toUpperCase()) {
                return " " + ch;
            } else {
                return ch;
            }
        }).reduce(function (prev, current) {
            return prev + current;
        }, ""));
    }
    return "";
};

var stringUtil = { createLabel: createLabel };

exports["default"] = stringUtil;
module.exports = exports["default"];