"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Panel = _react2["default"].createClass({
    displayName: "Panel",

    getInitialState: function getInitialState() {
        return { bodyShown: true };
    },

    collapseClicked: function collapseClicked() {
        this.setState({ bodyShown: !this.state.bodyShown });
    },

    closeComponent: function closeComponent() {

        if (this.props.closeable === true) {
            return _react2["default"].createElement("span", { className: "rui-panel-control rui-panel-close fa fa-close" });
        }
        return null;
    },

    collapseComponent: function collapseComponent() {
        if (this.props.collapsable === true) {
            return _react2["default"].createElement("span", { ref: "collapseToggle", onClick: this.collapseClicked, className: cs("rui-panel-control", "rui-panel-collapsable", "fa", { "fa-chevron-up": this.state.bodyShown }, { "fa-chevron-down": !this.state.bodyShown }) });
        }
        return null;
    },

    headerRhsComponent: function headerRhsComponent() {
        var closeComponent = this.closeComponent();
        var collapseComponent = this.collapseComponent();

        if (closeComponent || collapseComponent) {
            return _react2["default"].createElement(
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

        if (this.state.bodyShown === false) {
            style.display = "none";
        }
        if (this.props.maxHeight) {
            style.maxHeight = this.props.maxHeight;
        }

        return _react2["default"].createElement(
            "div",
            { className: "rui-panel-c" },
            _react2["default"].createElement(
                "div",
                { className: "rui-panel-header" },
                _react2["default"].createElement(
                    "div",
                    null,
                    _react2["default"].createElement(
                        "span",
                        { className: "rui-panel-title" },
                        this.props.title
                    )
                ),
                this.headerRhsComponent()
            ),
            _react2["default"].createElement(
                "div",
                { style: style, className: "rui-panel-body" },
                this.props.children
            )
        );
    }

});

module.exports = Panel;