"use strict";

var React = require("react");

var ClonerMixin = {

    cloneChildren: function cloneChildren() {
        var _this = this;

        return React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, { model: _this.props.model, changeListener: _this.props.changeListener });
        });
    }
};

module.exports = ClonerMixin;