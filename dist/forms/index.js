"use strict";

var React = require("react");

var Forms = React.createClass({
    displayName: "Forms",

    render: function render() {
        var _this = this;

        return React.createElement(
            "form",
            null,
            React.createElement(
                "div",
                { style: { display: "flex" } },
                React.Children.map(this.props.children, function (child) {
                    return React.cloneElement(child, { model: _this.props.model, changeListener: _this.dispatchChange });
                })
            )
        );
    },

    /**
     * Dispatch any changes on the form
     */
    dispatchChange: function dispatchChange(name, value) {
        if (this.props.changeListener) {
            this.props.changeListener(name, value);
        }
    }

});

module.exports = Forms;