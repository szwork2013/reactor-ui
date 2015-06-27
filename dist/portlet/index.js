
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require("react");

var createToolboxActions = function createToolboxActions(props) {
    var toolboxDefs = props.toolbox || [];

    return toolboxDefs.map(function (toolbox) {
        return React.createElement(
            "a",
            { key: toolbox["data-action-name"] },
            React.createElement("i", toolbox)
        );
    });
};

var Header = React.createClass({
    displayName: "Header",

    subtitle: function subtitle() {
        if (this.props.subtitle) {
            return React.createElement(
                "span",
                { className: "rui-portlet-subtitle" },
                this.props.subtitle
            );
        }
    },

    render: function render() {
        var icon = null;
        if (this.props.titleIcon) {
            icon = React.createElement("i", { className: "rui-portlet-title-icon " + this.props.titleIcon });
        }

        var toolbox = null;
        if (this.props.toolbox) {
            toolbox = this.props.toolbox;
        }
        return React.createElement(
            "div",
            { className: "rui-portlet-header" },
            React.createElement(
                "div",
                { className: "rui-portlet-title-cont" },
                icon,
                React.createElement(
                    "span",
                    { className: "rui-portlet-title" },
                    this.props.title
                ),
                this.subtitle()
            ),
            React.createElement(
                "div",
                { className: "rui-portlet-toolbox" },
                createToolboxActions(this.props)
            )
        );
    }
});

var Body = React.createClass({
    displayName: "Body",

    render: function render() {

        var reactEl = this.props.contentEl || this.props.children;
        var htmlStr = this.props.contentStr;

        var content = null;

        if (reactEl && reactEl.length > 0 && htmlStr !== undefined) {
            content = React.createElement(
                "span",
                null,
                "You can't have children and htmlStr as body at the same time."
            );
        } else if (htmlStr !== undefined) {
            content = React.createElement("div", { ref: "el", dangerouslySetInnerHTML: { __html: htmlStr } });
        } else if (reactEl) {
            content = reactEl;
        } else {
            content = React.createElement("div", { ref: "el" });
        }

        return React.createElement(
            "div",
            { style: this.props.style, className: "rui-portlet-body" },
            content
        );
    }
});

var Portlet = React.createClass({
    displayName: "Portlet",

    _clickListener: function _clickListener(e) {
        if (this.props.clickListener) {
            this.props.clickListener(e);
        }
    },
    componentWillUnmount: function componentWillUnmount() {
        //this.state.delegate.destroy();
        this.getDOMNode().removeEventListener("click", this._clickListener);
    },

    componentDidMount: function componentDidMount() {
        //this.setState({delegate :new  Delegate(this.getDOMNode())});
        this.getDOMNode().addEventListener("click", this._clickListener);
    },

    render: function render() {

        return React.createElement(
            "div",
            { className: "rui-portlet-container" },
            React.createElement(Header, this.props),
            React.createElement(Body, _extends({}, this.props, { ref: "body" }))
        );
    },

    bodyEl: function bodyEl() {
        return this.refs.body.refs.el.getDOMNode();
    },

    on: function on(eventType, selector, handler, useCapture) {
        this.state.delegate.on(eventType, selector, handler, useCapture);
    },

    off: function off(eventType, selector, handler, useCapture) {
        this.state.delegate.off(eventType, selector, handler, useCapture);
    },

    el: function el(selector) {

        var bodyEl = this.bodyEl();

        if (bodyEl) {
            return bodyEl.querySelector(selector);
        }
    }

});

module.exports = Portlet;