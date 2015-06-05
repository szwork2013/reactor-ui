/*globals require,module */
/* jshint -W097, esnext: true */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

/**
 * This is a grid row.. duh!
 *
 */
var Header = React.createClass({
    displayName: "Header",

    render: function render() {
        var width = this.props.width;
        var flex, flexInt;
        if (width) {
            flex = "0 0 " + width;
        } else {
            flexInt = this.props.config.flex ? this.props.config.flex : "1";
            flex = flexInt + " 1 10px";
        }

        return React.createElement(
            "div",
            { style: { flex: flex }, className: "rui-dt-cell-cont" },
            React.createElement(
                "div",
                { className: "rui-dt-cell" },
                React.createElement(
                    "span",
                    null,
                    this.props.title
                )
            )
        );
    }

});

module.exports = Header;