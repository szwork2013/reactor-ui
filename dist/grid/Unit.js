/*globals require,module */
/* jshint -W097 */

"use strict";

var React = require("react");

/** we will use pure css for now abstracted by our Container classes */

var Unit = React.createClass({
    displayName: "Unit",

    render: function render() {
        var partName = "rui-g" + this.props.unit;
        return React.createElement(
            "div",
            { className: partName },
            this.props.children
        );
    }

});

module.exports = Unit;