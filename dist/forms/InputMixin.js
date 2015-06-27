
/* jshint esnext: true, -W097 */

"use strict";

var InputMixin = {

    getType: function getType() {
        return this.props.type || "text";
    },

    //we are in deep shit
    _getContext: function _getContext() {
        return this._reactInternalInstance._context;
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
    hasContext: function hasContext() {
        return this._reactInternalInstance && this._reactInternalInstance._context;
    },

    getInputValue: function getInputValue() {
        var context;

        if (this.hasContext()) {
            context = this._getContext();
        }
        if (context && context.model) {
            return context.model[this.props.name];
        }
        return "";
    },
    inputRef: function inputRef(el) {
        this.__input = el;
    }

};

module.exports = InputMixin;