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
        return <div style={ {width: this.props.width} } className="rui-dg-cell-cont">
            <div className="rui-dg-cell rui-dg-hcell"><span>{this.props.title}</span></div>
        </div>
    }

});

module.exports = Header;
