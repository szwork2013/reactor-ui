/* global module,require */
/* jshint esnext: true, -W097 */

"use strict";

var React = require("react");

var ValueChangeMixin = {

    dispatchInputChange: function dispatchInputChange() {
        this._getContext().changeListener();
        if (this._getContext().changeListener) {
            var elNode = this.__input.getDOMNode();
            //this.props.changeListener(this.props.name,elNode.value);
            this._getContext().changeListener(this.props.name, elNode.value);
        }
    }

};

module.exports = ValueChangeMixin;