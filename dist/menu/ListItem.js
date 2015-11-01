"use strict";

var React = require("react/addons");
var cn = require("classnames");
/**
 * Create a list manually or from a configuration
 *
 * @type {*|Function}
 */
var ListItem = React.createClass({
    displayName: "ListItem",

    dispatchOnclick: function dispatchOnclick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.value);
        }
    },

    render: function render() {

        var scheme = this.props.scheme;

        var classNames = cn("rui-li", { "rui-li-green": scheme === "green" }, { "rui-li-blue": scheme === "blue" }, { "rui-li-violet": scheme === "violet" }, { "rui-li-red": scheme === "red" }, { "rui-li-orange": scheme === "orange" });

        return React.createElement(
            "div",
            { onClick: this.dispatchOnclick, className: classNames, value: this.props.value },
            this.props.text
        );
    }

});

module.exports = ListItem;