'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.createColumnConfig = createColumnConfig;

var _react = require('react');

function createColumnConfig(props) {

    var children = props.children;
    var cellConfig = [];

    _react.Children.forEach(children, function (child) {
        if (!child.props.hidden) {
            cellConfig.push(child.props);
        }
    });

    return cellConfig;
}