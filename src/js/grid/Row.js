/*globals require,module */
/* jshint -W097, esnext: true */

'use strict';
var React = require('react');

/** we will use pure css for now abstracted by our Container classes */

var Row = React.createClass({

    render() {
        return(<div className="row" {...this.props}>
            {this.props.children}
        </div>);
    }


});

module.exports = Row;
