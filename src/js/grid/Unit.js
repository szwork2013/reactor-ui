/*globals require,module */
/* jshint -W097, esnext: true */

'use strict';

var React = require('react');

/** we will use pure css for now abstracted by our Container classes */

var Unit = React.createClass({


    render() {
        var offset = this.props.offset;
        var screen = this.props.screen || "sm";
        var unit = this.props.unit || "12";
        var className = "col-" + screen + "-" + unit;

        if ( offset ) {
            className += " col-" + screen + "-" + "offset-" + offset;
        }

        return(<div className={className}>
            {this.props.children}
        </div>);
    }


});

module.exports = Unit;
