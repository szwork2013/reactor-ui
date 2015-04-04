/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

var React = require("react");
var cn = require("classnames");

var Pill = React.createClass({

    render() {
        var scheme = this.props.scheme;
        var size = this.props.size;
        var classNames =  cn(
            "rui-pill",
            {"rui-pill-green" : (scheme === "green") },
            {"rui-pill-blue" : (scheme === "blue") },
            {"rui-pill-violet" : (scheme === "violet") },
            {"rui-pill-red" : (scheme === "red") },
            {"rui-pill-orange" : (scheme === "orange") },
            {"rui-pill-large" : (size === "lg")}

        );
        return (<div className={classNames}>{this.props.children}</div>);
    }

});

module.exports = Pill;