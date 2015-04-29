/*globals require,module */
/* jshint -W097 */

'use strict';

var React = require('react');

/** we will use pure css for now abstracted by our Container classes */

var Container = React.createClass({

    render() {
        return(<div className="rui-g">
            {this.props.children}
        </div>)
    }


});

module.exports = Container;