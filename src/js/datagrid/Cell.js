/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

import React from 'react';




var Cell = React.createClass({

    getInitialState() {

        return { edited : false };
    },

    _onClick(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.onClick(e,this.refs.cell,this.props.index,this.props.config);
    },

    /**
     * Renderer renders a cell value -- places color etc.
     * Formatters formats a value to a human readable form e.g. 1000000 to 1M or 1,000,000 or (some) ZYZ
     *
     *
     * @private
     */
    _getCellValue() {
        //FIXME use the mixin here
        var {formatter,renderer,path,id, editor} = this.props.config;
        var pathToUse = path || id; //we use path, if not id
        var dataProvider = this.props.dataProvider;
        var record = this.props.dataProvider.recordAt(this.props.index);

        return <div>{record[pathToUse]}</div>
    },
    render() {

        return (
            <div style={{width: this.props.config.width}}  ref="cell" onClick={this._onClick} className="rui-dg-cell-cont">
                <div className="rui-dg-cell">{this._getCellValue()}</div>

            </div>
        );

    }


});


module.exports = Cell;