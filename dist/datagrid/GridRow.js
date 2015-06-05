/*globals require,module */
/* jshint -W097, esnext: true */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var cx = _interopRequire(require("classnames"));

/**
 * This is a grid row.. duh!
 *
 */
var GridRow = React.createClass({
    displayName: "GridRow",

    render: function render() {
        var clsName = cx({ "rui-dt-colcont": this.props.header === true }, { "rui-dt-rowcont": !this.props.header });
        return React.createElement(
            "div",
            { className: clsName },
            this.props.children
        );
    }

});

module.exports = GridRow;