/* jshint -W097 */

'use strict';

import assign from 'object-assign';
import React  from 'react';

import Input from '../forms/Input';

const {Children} =  React ;

const ENTER_KEY = 13;
const ESC_KEY = 27;

const DatatableMixin = {

    _createColumnConfig(propsToUse) {
        var props = propsToUse || this.props;
        var children = props.children;
        var cellConfig = [];

        Children.forEach(children, (child)=> {
            cellConfig.push(child.props);
        });

        return cellConfig;

    },

    _onCellClick(event,ref,index,config,id) {
        var recordData = this.getRecordData(index,config,ref);
        var editorData = assign(recordData,{oldValue: recordData.value});

        this.setState( { editorData : editorData });
    },


    _onEditorKeyDown(e) {
        var editorData = this.state.editorData;
        if ( e.keyCode === ENTER_KEY ) {
            if ( this.props.onEdit ) {
                this.props.onEdit(editorData);

            }
            this.setState({editorData : null});
        } else if ( e.keyCode === ESC_KEY ) {
            this.setState({editorData : null});
        }

    },

    _editorInputChange: function(k,v) {
        var editorData = assign(this.state.editorData,{});
        editorData.value = v;
        this.setState({editorData});
    },

    _createEditor() {
        if ( this.state.editorData && this.state.editorData.config.editable  ) {
            var editorData = this.state.editorData;
            return <div  ref="editorContainer" style={{ left: editorData.cellRef.left, top: editorData.cellRef.top + editorData.cellRef.height,position: 'absolute'}}>
                <Input onKeyDown={this._onEditorKeyDown} changeListener={this._editorInputChange}
                    showLabel={false} value={editorData.value} style={{position: 'relative', width: editorData.cellRef.width, height: editorData.cellRef.height}} />
            </div>;

        }
        return null;

    },


    ////<input ref="editorInput" onChange={this._editorInputChange} value={editorData.value} style={{width: editorData.cellRef.width, height: editorData.cellRef.height}} />

};


module.exports = DatatableMixin;
