/*globals require,module */
/* jshint -W097, esnext: true */

'use strict';

import React from 'react';

/**
 * This is a grid row.. duh!
 *
 */
var Header = React.createClass({

    render() {
        var width = this.props.width;
        var flex;
        if ( width ) {
            flex = "0 0 " + width;
        } else {
            flex = "1 1 10px";
        }
        
        return <div style={ {flex: flex} } className="rui-dt-cell-cont">
            <div className="rui-dt-cell"><span>{this.props.title}</span></div>
        </div>;
    }

});

module.exports = Header;
