/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

var React = require("react");

var getVisibleId = function getVisibleId(children) {
    if (React.Children.count(children) === 1) {
        return children.props.id;
    } else if (React.Children.count(children) > 1) {
        return children[0].props.id;
    }
    return null;
};

var TabSet = React.createClass({
    displayName: "TabSet",

    getInitialState: function getInitialState() {
        var child1 = getVisibleId(this.props.children);
        return { visible: child1 };
    },

    onTabControlClick: function onTabControlClick(id) {

        this.setState({ visible: id });
    },
    createTabControls: function createTabControls() {
        var _this = this;

        var tabs = this.props.children;
        var controlType = this.props.controlStyle || "classic";
        var controlTypeClss = "rui-tabset-ctrl-" + controlType;
        return React.Children.map(tabs, function (tab) {
            var className = "rui-tabset-ctrl " + controlTypeClss + " ";
            if (_this.state.visible === tab.props.id) {
                className = className + controlTypeClss + "-active rui-tab-active";
            } else {
                className = className + controlTypeClss + "-inactive  rui-tab-inactive";
            }
            return React.createElement(
                "div",
                { className: className, onClick: _this.onTabControlClick.bind(null, tab.props.id) },
                tab.props.text
            );
        });
    },

    createChildrenTabs: function createChildrenTabs() {
        var _this2 = this;

        return React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, { visible: child.props.id === _this2.state.visible });
        });
    },
    render: function render() {
        var tabControls = this.createTabControls();

        return React.createElement(
            "div",
            { className: "rui-tabset-c" },
            React.createElement(
                "div",
                { className: "rui-tabset", style: { display: "flex", flexFlow: "row" } },
                tabControls
            ),
            React.createElement(
                "div",
                { style: this.props.style },
                this.createChildrenTabs()
            )
        );
    }

});

module.exports = TabSet;