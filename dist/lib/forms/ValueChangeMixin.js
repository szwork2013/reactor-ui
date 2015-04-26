"use strict";

var React = require("react");

var ValueChangeMixin = {

    dispatchInputChange: function dispatchInputChange() {
        if (this.props.changeListener) {

            var elNode = this.__input.getDOMNode();
            this.props.changeListener(this.props.name, elNode.value);
        }
    }

};

module.exports = ValueChangeMixin;