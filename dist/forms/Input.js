/* jshint -W097 */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var assign = _interopRequire(require("object-assign"));

var InputMixin = _interopRequire(require("./InputMixin"));

var LabelMixin = _interopRequire(require("./LabelMixin"));

var ValueChangeMixin = _interopRequire(require("./ValueChangeMixin"));

var Input = React.createClass({
    displayName: "Input",

    getDefaultProps: function getDefaultProps() {
        return {
            labelInline: false,
            showLabel: true
        };
    },
    propTypes: {
        name: React.PropTypes.string.isRequired,
        labelInline: React.PropTypes.bool,
        labelWidth: React.PropTypes.any,
        inputWidth: React.PropTypes.any },

    mixins: [InputMixin, LabelMixin, ValueChangeMixin],

    contextTypes: {
        //model: React.PropTypes.object.isRequired,
        changeListener: React.PropTypes.any,
        inputRegistry: React.PropTypes.any
    },

    componentDidMount: function componentDidMount() {

        if (this.hasContext() && this._getContext().inputRegistry) {
            this._getContext().inputRegistry(this);
        }
    },

    render: function render() {
        var value = this.getInputValue(); //this._getContext().model[this.props.name] || "";
        var params = this.getInputParams();
        var style = assign(params.style, this.props.style || {});

        return React.createElement(
            "div",
            { className: "rui-form-cont" },
            this.getLabel(),
            React.createElement("input", _extends({ onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp, onKeyPress: this.props.onKeyPress,
                style: style, value: value, readOnly: params.readOnly, onChange: this.dispatchInputChange,
                ref: this.inputRef, className: "rui-form-input " + params.className, placeholder: this.props.placeholder }, this.props))
        );
    }

});

module.exports = Input;