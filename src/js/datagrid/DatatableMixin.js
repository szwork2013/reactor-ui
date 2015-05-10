/*globals require,module,document */
/* jshint -W097, esnext: true */
'use strict';

import assign from 'object-assign';
import React  from 'react';
const {Children} =  React ;


var DatatableMixin = {

    _createColumnConfig() {

        var children = this.props.children;
        var cellConfig = [];

        Children.forEach(children, (child)=> {
            cellConfig.push(child.props);
        });

        return cellConfig;

    },

    _onCellClick(event,ref,index,config,id) {
        var recordData = this.getRecordData(index,config,ref);
        this.setState( { editorData : recordData });
    },

    _editorInputChange: function() {
        var editorData = assign(this.state.editorData,{});
        var inputNode = React.findDOMNode(this.refs.editorInput);
        editorData.value = inputNode.value;
        this.setState({editorData: editorData});
    },

    _createEditor() {
        if ( this.state.editorData ) {
            var editorData = this.state.editorData;
            return <div  ref="editorContainer" style={{ left: editorData.cellRef.left, top: editorData.cellRef.top + editorData.cellRef.height,position: 'absolute'}}>
                <input ref="editorInput" onChange={this._editorInputChange} value={editorData.value} style={{width: editorData.cellRef.width, height: editorData.cellRef.height}} />
            </div>;

        }
        return null;

    },

    editorInputChange(e) {

    }

};


module.exports = DatatableMixin;
