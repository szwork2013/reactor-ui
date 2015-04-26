/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

var React = require("react");

var cs = require("classnames");

var Panel = React.createClass({
    displayName: "Panel",

    getInitialState: function getInitialState() {
        return { bodyShown: true };
    },

    collapseClicked: function collapseClicked() {
        this.setState({ bodyShown: !this.state.bodyShown });
    },

    closeComponent: function closeComponent() {

        if (this.props.closeable === true) {
            return React.createElement("span", { className: "rui-panel-control rui-panel-close fa fa-close" });
        }
        return null;
    },

    collapseComponent: function collapseComponent() {
        if (this.props.collapsable === true) {
            return React.createElement("span", { ref: "collapseToggle", onClick: this.collapseClicked, className: cs("rui-panel-control", "rui-panel-collapsable", "fa", { "fa-chevron-up": this.state.bodyShown }, { "fa-chevron-down": !this.state.bodyShown }) });
        }
        return null;
    },

    headerRhsComponent: function headerRhsComponent() {
        var closeComponent = this.closeComponent();
        var collapseComponent = this.collapseComponent();

        if (closeComponent || collapseComponent) {
            return React.createElement(
                "div",
                { className: "rui-panel-controls" },
                collapseComponent,
                " ",
                closeComponent
            );
        }
    },
    render: function render() {
        var style = {};
        var hideOnClose = this.props.hideOnClose; //by default its destroy

        if (this.state.bodyShown === false) {
            style.display = "none";
        }
        if (this.props.maxHeight) {
            style.maxHeight = this.props.maxHeight;
        }

        return React.createElement(
            "div",
            { className: "rui-panel-c" },
            React.createElement(
                "div",
                { className: "rui-panel-header" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "span",
                        { className: "rui-panel-title" },
                        this.props.title
                    )
                ),
                this.headerRhsComponent()
            ),
            React.createElement(
                "div",
                { style: style, className: "rui-panel-body" },
                this.props.children
            )
        );
    }

});

module.exports = Panel;