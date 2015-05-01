/*globals require,module */
/* jshint -W097, esnext: true */

'use strict';

import React from 'react';
import cx from 'classnames';


/**
 * This is a grid row.. duh!
 *
 */
var GridRow = React.createClass({

    render() {
        var clsName = cx("rui-dg-row",{ "rui-dg-header": this.props.header});
        var style = {};
        if ( this.props.header ) {
            style.position = 'absolute';
            style.left = 0;
            style.top = 0;
        }
        return <div style={style} className={clsName}>
            {this.props.children}
        </div>
    }

});

module.exports = GridRow;
