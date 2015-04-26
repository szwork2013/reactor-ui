/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

var React = require("react/addons");
var cn = require("classnames");
var PureRenderMixin = React.addons.PureRenderMixin;

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
        //var active = this.props.active; // FIXME: this is actually when we are together in a btn group,
        var schemeTheme = null;
        if (scheme) {
            schemeTheme = "rui-btn-" + scheme;
        }

        if (this.props.width) {
            style.width = this.props.width;
        }

        classNames = cn("rui-btn", schemeTheme
        //{"rui-btn-group-active-violet" : ( this.props.value === active && scheme === "violet" && this.props.value !== undefined ) } //FIXME bro!
        );
        return React.createElement(
            "button",
            { ref: "btn", onBlur: this.props.onBlur, style: style, value: this.props.value, className: classNames, disabled: disabled, onClick: this.__onClickHandler },
            this.createContent()
        );
    }
});

module.exports = Btn;