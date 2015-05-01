/*globals require,module */
/* jshint -W097 */

"use strict";
var React = require("react");

/** we will use pure css for now abstracted by our Container classes */

var Row = React.createClass({
    displayName: "Row",

    render: function render() {
        return React.createElement(
            "div",
            { style: { padding: "10px", width: "100%" } },
            this.props.children
        );
    }

});

module.exports = Row;