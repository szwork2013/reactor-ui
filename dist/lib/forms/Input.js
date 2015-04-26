"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require("react");
var InputMixin = require("./InputMixin");
var LabelMixin = require("./LabelMixin");
var ValueChangeMixin = require("./ValueChangeMixin");

var Input = React.createClass({
    displayName: "Input",

    propTypes: {
        requiredName: React.PropTypes.string.isRequired
    },
    mixins: [InputMixin, LabelMixin, ValueChangeMixin],

    render: function render() {
        var value = this.props.model[this.props.name] || "";
        return React.createElement(
            "div",
            null,
            this.getLabel(),
            React.createElement("input", _extends({ value: value, onChange: this.dispatchInputChange, ref: this.inputRef, className: "formx-input", placeholder: this.props.placeholder }, this.props))
        );
    }

});

module.exports = Input;