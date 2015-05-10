/* global module,require */
/* jshint esnext: true, -W097 */


'use strict';

var React = require("react");

var InputMixin = {


    getType : function() {
        return this.props.type || 'text';
    },


    inputRef : function(el) {
        this.__input = el;
    }

};

module.exports = InputMixin;
