/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

var React = require("react/addons");
var cn = require("classnames");
var Btn = require("./Btn");
var PureRenderMixin = React.addons.PureRenderMixin;

var BtnGroup = React.createClass({
    displayName: "BtnGroup",

    mixins: [PureRenderMixin],
    propTypes: {
        /** theme */
        scheme: React.PropTypes.string,
        /** text of the  button */
        active: React.PropTypes.string
        /** if this button group is disabled */

    },

    getInitialState: function getInitialState() {
        return { active: this.props.active };
    },

    processBtnGroup: function processBtnGroup() {
        var _this = this;

        return React.Children.map(this.props.children, function (child) {

            if (child.type !== Btn) {
                throw new Error("Only Btn type is allowed");
            }
            return React.cloneElement(child, { disabled: _this.props.disabled, scheme: _this.props.scheme, active: _this.state.active, onClick: _this.buttonClicked });
        });
    },

    buttonClicked: function buttonClicked(event, value) {
        if (this.props.onClick) {
            this.props.onClick(value);
        }
        this.setState({ active: value });
    },

    render: function render() {
        return React.createElement(
            "div",
            { className: "rui-btn-group" },
            this.processBtnGroup()
        );
    }

});

module.exports = BtnGroup;