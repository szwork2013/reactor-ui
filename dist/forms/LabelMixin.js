/* jshint esnext: true, -W097 */
/* global module */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var LabelMixin = {

    getLabel: function getLabel() {
        var hasLabel = this.props.label ? true : false;
        var labelText = this.props.label || this.props.name;
        var labelWidth = this.props.labelWidth || "100%";
        var labelStyle = { width: labelWidth };
        var showLabel = true;
        if (this.props.showLabel !== undefined) {
            showLabel = this.props.showLabel;
        }

        if (hasLabel) {
            labelText = labelText.substring(0, 1).toUpperCase() + labelText.substring(1);
        }
        if (showLabel) {
            return React.createElement(
                "label",
                { style: labelStyle },
                labelText
            );
        }
        return undefined;
    }

};

module.exports = LabelMixin;