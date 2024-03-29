"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var InputMixin = {

    getType: function getType() {
        return this.props.type || 'text';
    },

    //we are in deep shit
    _getContext: function _getContext() {
        return this._reactInternalInstance._context;
    },

    shouldComponentUpdate: function shouldComponentUpdate() {
        return true;
    },

    getInputParams: function getInputParams() {
        var readOnly = null;
        var className = "rui-input-block";
        var inputWidth = this.props.inputWidth || "100%";

        var style = { width: inputWidth };

        if (!this.props.readOnly) {
            //if falsy
            readOnly = "";
        } else {
            readOnly = "readonly";
        }
        if (this.props.labelInline) {
            className = "rui-input-inline";
        }

        return { className: className, style: style, readOnly: readOnly };
    },
    //FIXME: this is buggy, always seems to be true
    hasContext: function hasContext() {
        return this._reactInternalInstance && this._reactInternalInstance._context;
    },

    getInputValue: function getInputValue() {
        var context;

        if (this.hasContext()) {
            context = this._getContext();
            if (context.model) {
                return context.model[this.props.name];
            }
        }
        return this.props.value;
    },
    inputRef: function inputRef(el) {

        this.__input = el;
        if (this.__input) {
            this.__input.focus();
        }
    }

};

exports["default"] = InputMixin;
module.exports = exports["default"];