/* global module,require */
/* jshint esnext: true, -W097 */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var cx = _interopRequire(require("classnames"));

var InputMixin = _interopRequire(require("./InputMixin"));

var LabelMixin = _interopRequire(require("./LabelMixin"));

var ValueChangeMixin = _interopRequire(require("./ValueChangeMixin"));

var Input = React.createClass({
    displayName: "Input",

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    mixins: [InputMixin, LabelMixin, ValueChangeMixin],

    contextTypes: {
        model: React.PropTypes.object.isRequired,
        changeListener: React.PropTypes.any,
        inputRegistry: React.PropTypes.any
    },

    componentDidMount: function componentDidMount() {
        this._getContext().inputRegistry(this);
    },

    render: function render() {
        var value = this._getContext().model[this.props.name] || "";
        var readOnly = null;
        if (!this.props.readOnly) {
            //if falsy
            readOnly = "";
        } else {
            readOnly = "readonly";
        }

        return React.createElement(
            "div",
            { className: "rui-form-cont" },
            this.getLabel(),
            React.createElement("input", _extends({ value: value, readOnly: readOnly, onChange: this.dispatchInputChange, ref: this.inputRef, className: "rui-form-input", placeholder: this.props.placeholder }, this.props))
        );
    }

});

module.exports = Input;