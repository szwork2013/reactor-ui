/*globals require,module */
/* jshint -W097, esnext: true */

'use strict';

var React = require('react');

/** we will use pure css for now abstracted by our Container classes */

var Grid = React.createClass({

    render() {
        var className = "container";
        if ( this.props.fluid ) {
            className += "-fluid";
        }

        return(<div className={className} {...this.props}>
            {this.props.children}
        </div>);
    }


});

module.exports = Grid;
