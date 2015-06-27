
/* jshint esnext: true, -W097 */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var InputMixin = _interopRequire(require("./InputMixin"));

var LabelMixin = _interopRequire(require("./LabelMixin"));

var ValueChangeMixin = _interopRequire(require("./ValueChangeMixin"));

var mapOption = function mapOption(option) {
    var obj = option,
        value,
        text;
    var selectionValueKey = this.props.valueKey || "value";
    var selectionTextKey = this.props.textKey || "text";
    var isSelection;
    var selected = this._getContext().model[this.props.name];

    if (typeof obj === "string") {
        value = obj;
        text = obj;
    } else {
        value = obj[selectionValueKey];
        text = obj[selectionTextKey];
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
};

var Select = React.createClass({
    displayName: "Select",

    propTypes: {
        name: React.PropTypes.string.isRequired,
        labelInline: React.PropTypes.boolean,
        labelWidth: React.PropTypes.any,
        inputWidth: React.PropTypes.any },
    mixins: [InputMixin, LabelMixin, ValueChangeMixin],

    contextTypes: {
        model: React.PropTypes.object.isRequired,
        changeListener: React.PropTypes.any,
        inputRegistry: React.PropTypes.any
    },

    _getOptions: function _getOptions() {
        return this.props.selection || this.props.options || [];
    },

    createOptions: function createOptions() {

        var optional = this.props.optional === false ? this.props.optional : true;
        var optionalText = this.props.optionalText || "";
        var options = this._getOptions();

        var optionsEls = options.map(mapOption.bind(this));
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
        var params = this.getInputParams();

        return React.createElement(
            "div",
            { className: "rui-form-cont" },
            this.getLabel(),
            React.createElement(
                "select",
                { style: params.style, readOnly: params.readOnly, ref: this.inputRef, onChange: this.dispatchInputChange, className: "rui-form-input " + params.className },
                this.createOptions()
            )
        );
    }

});

module.exports = Select;