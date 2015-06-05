/* global module,require */
/* jshint esnext: true, -W097 */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var InputMixin = _interopRequire(require("./InputMixin"));

var LabelMixin = _interopRequire(require("./LabelMixin"));

var ValueChangeMixin = _interopRequire(require("./ValueChangeMixin"));

var Select = React.createClass({
    displayName: "Select",

    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    mixins: [InputMixin, LabelMixin, ValueChangeMixin],

    contextTypes: {
        model: React.PropTypes.object.isRequired,
        changeListener: React.PropTypes.any,
        inputRegistry: React.PropTypes.any
    },

    createOptions: function createOptions() {
        var selected = this._getContext().model[this.props.name];
        var optional = this.props.optional === false ? this.props.optional : true;
        var optionalText = this.props.optionalText || "";
        var options = this.props.selection || this.props.options || [];
        var isSelection;

        var optionsEls = options.map(function (option) {

            var obj = option,
                value,
                text;

            if (typeof obj === "string") {
                value = obj;
                text = obj;
            } else {
                value = obj.value;
                text = obj.text;
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

    /**
     * We need to set the state here because we have selected something ( if we ever )
     */

    render: function render() {

        return React.createElement(
            "div",
            { className: "rui-form-cont" },
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