"use strict";

var React = require("react");

var InputMixin = {

    getType: function getType() {
        return this.props.type || "text";
    },

    inputRef: function inputRef(el) {
        this.__input = el;
    }

};

module.exports = InputMixin;