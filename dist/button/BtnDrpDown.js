/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

var React = require("react/addons");
var cn = require("classnames");
var PureRenderMixin = React.addons.PureRenderMixin;
var Btn = require("./Btn");
var List = require("../menu/List");
/**
 * Btn element
 *
 * @type {*|Function}
 */
var BtnDropDown = React.createClass({
    displayName: "BtnDropDown",

    mixins: [PureRenderMixin],

    getInitialState: function getInitialState() {
        return { listVisible: false };
    },

    createItems: function createItems() {
        if (this.state.listVisible) {
            if (this.props.items) {
                return React.createElement(List, { onClick: this.onItemClick, scheme: this.props.scheme, items: this.props.items, minWidth: this.state.listMinWidth });
            } else {
                //FIXME, we should listener here
                return this.props.children;
            }
        } else {
            return null;
        }
    },

    onItemLick: function onItemLick() {
        if (this.props.onClick) {
            this.props.onClick.apply(null, arguments);
        }
    },

    onBlur: function onBlur() {
        this.setState({ listVisible: !this.state.listVisible });
    },
    buttonClicked: function buttonClicked() {
        var element = this.refs.btn.getDOMNode();
        var width = element.offsetWidth - 2; //border
        this.setState({ listVisible: !this.state.listVisible, listMinWidth: width + "px" });
    },

    render: function render() {
        var defaultText = this.props.defaultText;

        var classNames = cn("rui-btn-drpdown", { "rui-btn-drpdown-green": "green" === this.props.scheme });

        return React.createElement(
            "div",
            { className: classNames },
            React.createElement(
                Btn,
                { scheme: this.props.scheme, ref: "btn", onBlur: this.onBlur, disabled: this.props.disabled, onClick: this.buttonClicked },
                defaultText,
                " ",
                React.createElement("span", { className: "fa fa-chevron-down" })
            ),
            this.createItems()
        );
    }
});

module.exports = BtnDropDown;