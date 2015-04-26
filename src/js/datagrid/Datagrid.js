/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

import React from 'react';
const { Children } = { React };
/**
 *
 * RecordProvider - used by DataGrid to render records
 *
 *
 *
 *
 */
var Datagrid = React.createClass({

    propTypes: {
        recordProvider: React.PropTypes.object
    },


    /**
     * Return states
     *
     */
    getInitialState() {
        var childColumns = [];
        Children.forEach(this.props.children, (child, index)=> {
            childColumns.push(child);
        });
        return ( {columns: childColumns} );
    },


    /**
     *
     */
    render() {
        var recordProvider = this.props.recordProvider;
        var columns = <GridColumn columns={this.state.columns}/>;
        var rows = {};
        return (
            <div className="rui-datagrid">
                {columns}
                {rows}
            </div>
        );

    }
});

export default Datagrid;