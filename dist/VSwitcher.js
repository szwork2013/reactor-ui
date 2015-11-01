"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var View = _react2["default"].createClass({
    displayName: "View",

    getInitialState: function getInitialState() {
        return { visible: this.props.visible, view: this.props.view };
    },

    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        if (this.state.visible !== newProps.visible) {
            this.setState({ visible: newProps.visible });
        }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        return this.state.visible !== nextState.visible;
    },

    render: function render() {
        var divStyle = { display: this.state.visible ? "block" : "none" };

        var theElement = null;
        if (this.props.element) {
            theElement = this.props.element;
        } else {
            theElement = _react2["default"].createElement("div", { ref: "el" });
        }
        var name = null;
        if (typeof this.props.view === 'string') {
            name = this.props.view;
        } else {
            name = this.props.ref;
        }

        return _react2["default"].createElement(
            "div",
            { "data-vp-name": name, style: divStyle },
            theElement
        );
    }

});

var ViewSwitcher = _react2["default"].createClass({
    displayName: "ViewSwitcher",

    getInitialState: function getInitialState() {
        //create all the views from the definition
        var views = this.props.views || [];
        var viewPrefix = this.props.viewPrefix ? this.props.viewPrefix : "";
        var visible = this.props.visible;

        return { views: views, viewPrefix: viewPrefix || '', visible: visible };
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({ visible: nextProps.visible });
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        //if the current visible is not equal to the next visible
        return nextState.visible && nextState.visible !== this.state.visible;
    },

    render: function render() {
        var _this = this;

        var views = this.state.views;
        var prefix = "rui-vs-" + this.state.viewPrefix;

        return _react2["default"].createElement(
            "div",
            { className: prefix },
            " ",
            views.map(function (view) {
                if (typeof view === 'string') {
                    return _react2["default"].createElement(View, { ref: view, key: view, view: view, visible: _this.state.visible === view });
                } else {
                    return _react2["default"].createElement(View, { ref: view.ref, element: view.element, visible: _this.state.visible === view.ref });
                }
            })
        );
    },

    show: function show(view) {
        var visible = this.state.visible;
        if (visible !== view) {
            this.setState({ visible: view });
            //FIXME: disable for now, rethink
            // this._dispatchEvents(view,visible);
        }
    },

    el: function el(view) {
        var refViews = this.refs[view];
        if (refViews.refs.el) {
            return this.refs[view].refs.el;
        }
        return null;
    }

});

exports["default"] = ViewSwitcher;
module.exports = exports["default"];