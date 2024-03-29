'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _actionbarActionBar = require('../actionbar/ActionBar');

var _actionbarActionBar2 = _interopRequireDefault(_actionbarActionBar);

var _TabActionBar = require('./TabActionBar');

var _TabActionBar2 = _interopRequireDefault(_TabActionBar);

var React = require("react");

var createToolboxActions = function createToolboxActions(props) {
    var toolboxDefs = props.toolbox || [];

    return toolboxDefs.map(function (toolbox) {
        return React.createElement(
            'a',
            { key: toolbox["data-action-name"] },
            React.createElement('i', toolbox)
        );
    });
};

var findActionBar = function findActionBar(props) {

    var actionBar = undefined;
    React.Children.forEach(props.children, function (child) {
        if (child.type === _actionbarActionBar2['default']) {
            actionBar = child;
        } else if (child.type === _TabActionBar2['default']) {
            actionBar = child;
        }
    });
    return actionBar;
};

var Header = React.createClass({
    displayName: 'Header',

    subtitle: function subtitle() {
        if (this.props.subtitle) {
            return React.createElement(
                'span',
                { className: 'rui-portlet-subtitle' },
                this.props.subtitle
            );
        }
    },

    render: function render() {
        var icon = null;
        var actionBar = findActionBar(this.props);
        var style = {};
        if (actionBar) {
            style.lineHeight = "28px";
        }
        if (this.props.titleIcon) {
            icon = React.createElement('i', { className: "rui-portlet-title-icon " + this.props.titleIcon });
        }

        var toolbox = null;
        if (this.props.toolbox) {
            toolbox = this.props.toolbox;
        }
        return React.createElement(
            'div',
            { className: 'rui-portlet-header' },
            React.createElement(
                'div',
                { style: style, className: 'rui-portlet-title-cont' },
                icon,
                React.createElement(
                    'span',
                    { className: 'rui-portlet-title' },
                    this.props.title
                ),
                this.subtitle()
            ),
            React.createElement(
                'div',
                { className: 'rui-portlet-toolbox' },
                findActionBar(this.props),
                createToolboxActions(this.props)
            )
        );
    }
});

var Body = React.createClass({
    displayName: 'Body',

    render: function render() {

        var content = React.Children.map(this.props.children, function (child) {
            if (child.type === _actionbarActionBar2['default']) {
                return null;
            } else if (child.type === _TabActionBar2['default']) {
                return null;
            } else {
                return child;
            }
        });

        return React.createElement(
            'div',
            { style: this.props.style, className: 'rui-portlet-body' },
            content
        );
    }
});

var Portlet = React.createClass({
    displayName: 'Portlet',

    render: function render() {

        return React.createElement(
            'div',
            { className: 'rui-portlet-container' },
            React.createElement(Header, this.props),
            React.createElement(Body, _extends({}, this.props, { ref: "body" }))
        );
    },

    bodyEl: function bodyEl() {
        return this.refs.body.refs.el;
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

exports['default'] = Portlet;
module.exports = exports['default'];