/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = require("react/addons");
var cn = require("classnames");
var PureRenderMixin = React.addons.PureRenderMixin;

var assign = _interopRequire(require("object-assign"));

/**
 * Btn element
 *
 * @type {*|Function}
 */
var Btn = React.createClass({
    displayName: "Btn",

    mixins: [PureRenderMixin],
    propTypes: {
        /** theme */
        scheme: React.PropTypes.string,
        /** text of the  button */
        text: React.PropTypes.string,
        /** if button is in disabled mode */

        /** value of this button */
        value: React.PropTypes.string
    },

    createText: function createText() {
        if (this.props.text) {
            return this.props.text;
        }
        return null;
    },

    createIcon: function createIcon() {
        if (this.props.iconCls) {
            return React.createElement("span", { className: this.props.iconCls });
        }
        return null;
    },

    __onClickHandler: function __onClickHandler(e) {
        if (this.props.onClick) {
            this.props.onClick(e, this.props.value);
        }
    },

    createContent: function createContent() {
        var contentEls = [],
            icon,
            text;

        if (React.Children.count(this.props.children) === 0) {
            icon = this.createIcon();
            text = this.createText();
            if (icon) {
                contentEls.push(icon);
            }
            if (text) {
                contentEls.push(text);
            }
            return contentEls;
        } else {
            return this.props.children;
        }
    },

    render: function render() {
        var style = {},
            classNames;
        var disabled = this.props.disabled === true;
        var scheme = this.props.scheme;
        var active = this.props.active;

        var schemeTheme = null;
        if (scheme) {
            schemeTheme = "rui-btn-" + scheme;
        }
        style = assign(style, this.props.style);
        if (this.props.width) {
            style.width = this.props.width;
        }

        //TODO: the active here is a bit nasty, redo this
        classNames = cn("rui-btn", schemeTheme, { "rui-btn-group-active-violet": this.props.value === active && scheme === "violet" && this.props.value !== undefined }, { "rui-btn-group-active-green": this.props.value === active && scheme === "green" && this.props.value !== undefined }, { "rui-btn-group-active-red": this.props.value === active && scheme === "red" && this.props.value !== undefined }, { "rui-btn-group-active-blue": this.props.value === active && scheme === "blue" && this.props.value !== undefined }, { "rui-btn-group-active-orange": this.props.value === active && scheme === "orange" && this.props.value !== undefined });
        return React.createElement(
            "button",
            { ref: "btn", onBlur: this.props.onBlur, style: style, value: this.props.value, className: classNames, disabled: disabled, onClick: this.__onClickHandler },
            this.createContent()
        );
    }
});

module.exports = Btn;