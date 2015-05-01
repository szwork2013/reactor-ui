/*globals require,module */
/* jshint -W097 */

"use strict";

var React = require("react");

/** we will use pure css for now abstracted by our Container classes */

var Container = React.createClass({
    displayName: "Container",

    render: function render() {
        return React.createElement(
            "div",
            { className: "rui-g" },
            this.props.children
        );
    }

});

module.exports = Container;