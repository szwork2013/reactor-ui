"use strict";

var React = require("react");
var InputMixin = require("./InputMixin");
var LabelMixin = require("./LabelMixin");
var ValueChangeMixin = require("./ValueChangeMixin");

var AutoComplete = React.createClass({
    displayName: "AutoComplete",

    propTypes: {
        requiredName: React.PropTypes.string.isRequired
    },
    mixins: [InputMixin, LabelMixin],

    getInitialState: function getInitialState() {
        return { inputActive: false, hasValue: this.getValue() ? true : false, hasPlaceholder: this.props.placeholder ? true : false };
    },

    renderValue: function renderValue() {
        var value = this.getValue();
        return null;
    },

    getValue: function getValue() {
        return this.props.model[this.props.name] || "";
    },

    containerClick: function containerClick() {},

    acInputChange: function acInputChange() {},

    renderInput: function renderInput() {
        if (!this.state.hasValue && this.state.hasPlaceholder) {
            return React.createElement("input", { onChange: this.acInputChange, placeholder: this.props.placeholder, type: "text", autocomplete: "off", style: { width: "100%", position: "relative", left: "0px", tabindex: "tabindex" } });
        }
    },
    render: function render() {

        var inputActive = false;
        return React.createElement(
            "div",
            null,
            this.getLabel(),
            React.createElement(
                "div",
                { className: "rui-form-ac-cont rui-form-input", onClick: this.containerClick },
                React.createElement(
                    "div",
                    null,
                    this.renderValue()
                ),
                this.renderInput()
            ),
            React.createElement("input", { style: { position: "relative", left: "-20000px" }, value: this.getValue(), onChange: this.dispatchInputChange, ref: this.inputRef })
        );
    }

});

module.exports = AutoComplete;