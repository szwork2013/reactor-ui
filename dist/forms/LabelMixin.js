"use strict";

var React = require("react");

var LabelMixin = {

    getLabel: function getLabel() {
        var hasLabel = this.props.label ? true : false;
        var label = this.props.label || this.props.name;

        if (!hasLabel) {
            label = label.substring(0, 1).toUpperCase() + label.substring(1);
        }
        return React.createElement(
            "label",
            null,
            label
        );
    }

};

module.exports = LabelMixin;