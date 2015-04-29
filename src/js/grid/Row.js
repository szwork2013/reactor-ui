/*globals require,module */
/* jshint -W097 */

'use strict';
var React = require('react');

/** we will use pure css for now abstracted by our Container classes */

var Row = React.createClass({

    render() {
        return(<div style={{padding : '10px'}}>
            {this.props.children}
        </div>)
    }


});

module.exports = Row;