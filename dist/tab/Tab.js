"use strict";

var React = require("react");

var Tab = React.createClass({
    displayName: "Tab",

    render: function render() {

        return React.createElement(
            "div",
            { className: "rui-tab-c", style: { display: this.props.visible ? "block" : "none" } },
            this.props.children
        );
    }

});

module.exports = Tab;