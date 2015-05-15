"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/* jshint esnext: true */

var React = _interopRequire(require("react"));

var Input = _interopRequire(require("./Input"));

var AutoComplete = _interopRequire(require("./AutoComplete"));

var Select = _interopRequire(require("./Select"));

var Form = React.createClass({
    displayName: "Form",

    childContextTypes: {
        model: React.PropTypes.object.isRequired,
        changeListener: React.PropTypes.any,
        inputRegistry: React.PropTypes.any //so we can introspect coming
    },

    getChildContext: function getChildContext() {
        return { model: this.props.model, changeListener: this.dispatchChange, inputRegistry: this._inputRegistry };
    },

    /**
     * Register the input
     */
    _inputRegistry: function _inputRegistry(input) {},
    /**
     * Render a form
     */
    render: function render() {

        return React.createElement(
            "div",
            null,
            React.Children.map(this.props.children, function (child) {
                return React.cloneElement(child, {});
            })
        );
    },

    dispatchChange: function dispatchChange(name, value) {

        if (this.props.changeListener) {
            this.props.changeListener(name, value);
        }
    }

});

var FormWrapper = React.createClass({
    displayName: "FormWrapper",

    render: function render() {
        return React.createElement(
            Form,
            { model: this.props.model, changeListener: this.props.changeListener },
            this.props.children
        );
    }

});

exports.Forms = FormWrapper;
exports.Input = Input;
exports.AutoComplete = AutoComplete;
exports.Select = Select;