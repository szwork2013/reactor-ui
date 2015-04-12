"use strict";

var React = require("react");
var ClonerMixin = require("./ClonerMixin");

var Col = React.createClass({
    displayName: "Col",

    mixins: [ClonerMixin],
    render: function render() {

        var style = {};
        if (this.props.width) {
            style.width = this.props.width;
        }
        return React.createElement(
            "div",
            { style: style, className: "formx-container formx-column" },
            this.cloneChildren()
        );
    }

});

var BCont = React.createClass({
    displayName: "BCont",

    mixins: [ClonerMixin],
    render: function render() {

        return React.createElement(
            "div",
            { className: "formx-block" },
            this.cloneChildren()
        );
    }
});

module.exports = {
    Col: Col,
    BCont: BCont
};