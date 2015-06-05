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
        var flex,flexInt;
        if ( width ) {
            flex = "0 0 " + width;
        } else {
            flexInt = this.props.config.flex ? this.props.config.flex : "1";
            flex = flexInt + " 1 10px";
        }
        
        return <div style={ {flex: flex} } className="rui-dt-cell-cont">
            <div className="rui-dt-cell"><span>{this.props.title}</span></div>
        </div>;
    }

});

module.exports = Header;
