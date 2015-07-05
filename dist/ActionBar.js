
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Action = React.createClass({
    displayName: "Action",

    render: function render() {
        return React.createElement(
            "div",
            { style: { display: "inline-block", padding: "0px 2px" } },
            this.props.children
        );
    }
});

var ActionBar = React.createClass({
    displayName: "ActionBar",

    render: function render() {
        return React.createElement(
            "div",
            { style: this.props.style },
            this.props.children
        );
    }
});

ActionBar.Action = Action;

module.exports = ActionBar;