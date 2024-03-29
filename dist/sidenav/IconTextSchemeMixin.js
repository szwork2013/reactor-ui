"use strict";

var React = require("react");

var IconTextSchemeMixin = {

    createIconTextContent: function createIconTextContent() {

        var contentEls = [],
            propsIcon = this.props.icon,
            propsText = this.props.text,
            icon,
            text,
            style = this.props.style; //style= it = icon text, ti , text icon, tbi text below icon

        if (!style) {
            style = "it"; //icon, text
        }
        if (!propsIcon && this.props.nav) {
            propsIcon = this.props.nav.icon;
        }
        if (!propsText && this.props.nav) {
            propsText = this.props.nav.text;
        }

        if (propsIcon) {
            icon = React.createElement("span", { style: { paddingRight: 10 }, className: propsIcon });
        }
        if (propsText) {
            text = React.createElement(
                "span",
                null,
                propsText
            );
        }

        if (style === "it") {
            if (icon) {
                contentEls.push(icon);
            }
            if (text) {
                contentEls.push(text);
            }
        }

        return contentEls;
    }

};

module.exports = IconTextSchemeMixin;