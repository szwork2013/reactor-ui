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
        var clsName = cx(
            { "rui-dt-colcont" : this.props.header === true} ,
            { "rui-dt-rowcont" : !this.props.header}
        );
        return <div className={clsName}>
            {this.props.children}
        </div>;
    }

});

module.exports = GridRow;
