'use strict';

var React = require("react");

var ClonerMixin = {

    cloneChildren : function() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child,{ model: this.props.model,changeListener : this.props.changeListener })
        })
    }
};

module.exports = ClonerMixin;