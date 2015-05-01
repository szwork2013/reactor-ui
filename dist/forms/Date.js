"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require("react");

var InputMixin = require("./InputMixin");
var LabelMixin = require("./LabelMixin");
var ValueChangeMixin = require("./ValueChangeMixin");

/**
 *
 * @type {*|Function}
 */
var DatePicker = React.createClass({
    displayName: "DatePicker",

    mixins: [InputMixin, LabelMixin, ValueChangeMixin],

    render: function render() {
        var value = this.props.model[this.props.name] || "";

        return React.createElement(
            "div",
            null,
            this.getLabel(),
            React.createElement("input", _extends({ type: "date", ref: this.inputRef, value: value, onChange: this.dispatchInputChange, className: "rui-form-input", placeholder: this.props.placeholder }, this.props))
        );
    }

});

module.exports = DatePicker;