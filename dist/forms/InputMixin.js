/* global module,require */
/* jshint esnext: true, -W097 */

"use strict";

var React = require("react");

var InputMixin = {

    getType: function getType() {
        return this.props.type || "text";
    },

    //we are in deep shit
    _getContext: function _getContext() {
        return this._reactInternalInstance._context;
    },
    inputRef: function inputRef(el) {
        this.__input = el;
    }

};

module.exports = InputMixin;