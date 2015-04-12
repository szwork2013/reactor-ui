/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

var React = require("react/addons");
var ListItem = require("./ListItem");

/**
 * Create a list manually or from a configuration
 *
 * @type {*|Function}
 */
var List = React.createClass({
    displayName: "List",

    createItems: function createItems() {
        var _this = this;

        var items = this.props.items || [];

        if (items.size === 0) {
            return this.props.children;
        } else {
            return items.map(function (item) {

                if (typeof item === "string") {
                    return React.createElement(ListItem, { onClick: _this.props.onClick, scheme: _this.props.scheme, text: item });
                } else {
                    return React.createElement(ListItem, { onClick: _this.props.onClick, scheme: _this.props.scheme, text: item.text, value: item.value, icon: item.icon });
                }
            });
        }
    },

    render: function render() {
        var style = {};
        if (this.props.minWidth) {
            style["min-width"] = this.props.minWidth;
        }
        if (this.props.width) {
            style.width = this.props.width;
        }

        return React.createElement(
            "div",
            { style: style, className: "rui-list-c rui-list-float" },
            this.createItems()
        );
    }

});

module.exports = List;