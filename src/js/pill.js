/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

var React = require("react");
var cn = require("classnames");

var Pill = React.createClass({

    render() {
        var type = this.props.type;

        return (<div className={cn("rui-pill",{"rui-pill-primary" : (type === "primary") })}>{this.props.children}</div>);
    }

});

module.exports = Pill;