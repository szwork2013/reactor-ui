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

        return <div>{record[pathToUse]}</div>;
    },
    render() {

        var width = this.props.config.width;
        var flex,flexInt;
        if ( width ) {
            flex = "0 0 " + width;
        } else {
            flexInt = this.props.config.flex ? this.props.config.flex : "1";
            flex = flexInt + " 1 10px";
        }

        return (
            <div style={{flex : flex}}  ref="cell" onClick={this._onClick} className="rui-dt-cell-cont">
                <div className="rui-dt-cell">{this._getCellValue()}</div>
            </div>
        );

    }


});


module.exports = Cell;
