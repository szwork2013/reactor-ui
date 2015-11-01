"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require("react");

var NavGroup = require("./NavGroup");
var Nav = require("./Nav");

/**
 * The SideNav is a Side Navigation component duH!
 *
 * navs = [
 *     { title: "Main Group" , navlist: [
 *          { title: "Nav 1" }
 *       ]
 *     }
 * ]
 * @type {*|Function}
 */
var SideNav = React.createClass({
    displayName: "SideNav",

    getInitialState: function getInitialState() {
        return { selected: { id: this.props.selected } };
    },

    buildFromSettings: function buildFromSettings() {
        var _this = this;

        return this.props.navs.map(function (navkind) {
            //nav kind could have a navlist, which we assume it contains a group of navs link
            if (navkind.navlist) {
                return React.createElement(NavGroup, { key: navkind.id, selected: _this.state.selected, onClick: _this.onSubNavClick, nav: navkind });
            } else {
                return React.createElement(Nav, _extends({ key: navkind.id, selected: _this.state.selected }, navkind, { onClick: _this.onClick }));
            }
        });
    },
    onSubNavClick: function onSubNavClick(group, child) {
        var selection = { group: group, id: child };
        this.setState({ selected: selection });
        this.dispatchSelection(selection);
    },
    onClick: function onClick(id) {
        var selection = { id: id };
        this.setState({ selected: selection });
        this.dispatchSelection(selection);
    },

    dispatchSelection: function dispatchSelection(selection) {
        if (this.props.onSelection) {
            this.props.onSelection(selection);
        }
    },
    buildChildren: function buildChildren() {

        if (this.props.navs) {
            return this.buildFromSettings();
        } else {
            return this.props.children;
        }
    },

    render: function render() {
        return React.createElement(
            "div",
            { style: { width: '100%' } },
            this.buildChildren()
        );
    }

});

module.exports = SideNav;