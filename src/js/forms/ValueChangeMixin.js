'use strict';

var React = require("react");

var ValueChangeMixin = {


    dispatchInputChange : function() {
        console.log("dis");
        if ( this.props.changeListener ) {

            var elNode = this.__input.getDOMNode();
            console.log(elNode.value);
            this.props.changeListener(this.props.name,elNode.value);
        }
    }

};

module.exports = ValueChangeMixin;