"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * This is a grid row.. duh!
 *
 */
var Header = _react2["default"].createClass({
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

        return _react2["default"].createElement(
            "div",
            { style: { flex: flex }, className: "rui-dt-cell-cont" },
            _react2["default"].createElement(
                "div",
                { className: "rui-dt-cell" },
                _react2["default"].createElement(
                    "span",
                    null,
                    this.props.title
                )
            )
        );
    }

});

module.exports = Header;