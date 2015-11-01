

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var React = require("react");
var Nav = require("./Nav");
var IconTextSchemeMixin = require("./IconTextSchemeMixin");
var cn = require("classnames");

var NavGroup = React.createClass({
    displayName: "NavGroup",

    mixins: [IconTextSchemeMixin, _reactAddonsPureRenderMixin2["default"]],

    getInitialState: function getInitialState() {

        return { collapsed: false, selected: this.props.selected };
    },

    buildChildren: function buildChildren() {
        var _this = this;

        if (this.props.nav) {
            return this.props.nav.navlist.map(function (nav) {
                return React.createElement(Nav, _extends({ selected: _this.state.selected, onClick: _this.onSubNavClick }, nav));
            });
        } else {
            return this.props.children;
        }
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({ selected: nextProps.selected });
    },

    /**
     *  The ID of this would be this.props.id/the clicked nav id
     */
    onSubNavClick: function onSubNavClick(id) {
        if (this.props.onClick) {
            this.props.onClick(this.props.id, id);
        }
    },

    onClick: function onClick() {
        this.setState({ collapsed: !this.state.collapsed });
    },

    componentDidMount: function componentDidMount() {
        //we cant transition 0 height to auto height.. so below is the result
        if (!this.__computedHeight) {
            var cloned = this.refs.cont.cloneNode(true);
            cloned.style.position = "absolute";
            cloned.style.left = "-9999px";
            cloned.style.height = "auto";
            document.body.appendChild(cloned);
            this.__computedHeight = cloned.clientHeight;
            document.body.removeChild(cloned);
        }
    },

    render: function render() {
        var itemsClassnames = cn("rui-snav-items");

        var style = {};
        if (this.state.collapsed) {
            style['height'] = this.__computedHeight;
        } else {
            style['height'] = 0;
        }

        return React.createElement(
            "div",
            { className: "rui-snav-grp-c" },
            React.createElement(
                "div",
                { onClick: this.onClick, className: "rui-snav-grp" },
                this.createIconTextContent()
            ),
            React.createElement(
                "div",
                { ref: "cont", style: style, className: itemsClassnames },
                this.buildChildren()
            )
        );
    }
});

module.exports = NavGroup;