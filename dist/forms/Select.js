
"use strict";

var React = require("react");
var InputMixin = require("./InputMixin");
var LabelMixin = require("./LabelMixin");
var ValueChangeMixin = require("./ValueChangeMixin");

var Select = React.createClass({
    displayName: "Select",

    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    mixins: [InputMixin, LabelMixin, ValueChangeMixin],

    createOptions: function createOptions() {
        var selected = this.props.model[this.props.name];
        var optional = this.props.optional === false ? this.props.optional : true;
        var optionalText = this.props.optionalText || "";
        var options = this.props.selection || [];
        var isSelection;

        var optionsEls = options.map(function (option) {
            var obj = option,
                value,
                text;

            if (typeof obj === "string") {
                value = obj;
                text = obj;
            }
            if (selected && selected === value) {
                isSelection = true;
            } else {
                isSelection = false; //make sure to reset
            }

            return React.createElement(
                "option",
                { value: value, selected: isSelection },
                text
            );
        });
        if (optional) {
            optionsEls.unshift(React.createElement(
                "option",
                { value: "" },
                optionalText
            ));
        }
        return optionsEls;
    },

    render: function render() {

        return React.createElement(
            "div",
            null,
            this.getLabel(),
            React.createElement(
                "select",
                { ref: this.inputRef, onChange: this.dispatchInputChange, className: "rui-form-input" },
                this.createOptions()
            )
        );
    }

});

module.exports = Select;