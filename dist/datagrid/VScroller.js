
/* jshint -W097 */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

/**
 * Listen to mouse drag , mousewheel andkeyboard arrowkeys
 *
 */
var VScroller = React.createClass({
    displayName: "VScroller",

    _onWheel: function _onWheel(e) {},

    scrolling: function scrolling() {},

    render: function render() {
        return React.createElement(
            "div",
            { onWheel: this._onWheel, style: { height: this.props.height, width: 16, backgroundColor: "#EEE" }, className: "rui-dg-vscroller" },
            React.createElement("div", { style: { borderRadius: 2, margin: 3, backgroundColor: "#959595", width: 10, height: 30 } })
        );
    }

});

module.exports = VScroller;