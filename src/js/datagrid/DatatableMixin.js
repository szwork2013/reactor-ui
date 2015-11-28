
import assign from 'object-assign';
import React  from 'react';

import Input from '../forms/Input';

const {Children} =  React ;

const ENTER_KEY = 13;
const ESC_KEY = 27;


const dispatchEditData = (props,editorData) => {
    if ( props.onEdit ) {
        props.onEdit(editorData);
    } else {
        console.warn('no onEdit function is given to handle edit data');
    }

};

const DatatableMixin = {

    _createColumnConfig(propsToUse) {
        var props = propsToUse || this.props;
        var children = props.children;
        var cellConfig = [];

        Children.forEach(children, (child)=> {
            if ( child.props.visible === true || (!child.props.visible && child.props.visible !== false) ) {
                cellConfig.push(child.props);
            }

        });

        return cellConfig;

    },

    _onCellClick(event,ref,index,config) {
        const currentEditorData = this.state.editorData;
        const recordData = this.getRecordData(index,config,ref);
        const editorData = assign(recordData,{oldValue: recordData.value});

        if ( currentEditorData ) {
            dispatchEditData(this.props,currentEditorData);
        }

        this.setState( { editorData : editorData });
    },


    _onEditorKeyDown(e) {
        if ( e.keyCode === ENTER_KEY ) {
            dispatchEditData(this.props,this.state.editorData);
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
                <Input onKeyDown={this._onEditorKeyDown} onInputChange={this._editorInputChange}
                    showLabel={false} value={editorData.value} style={{position: 'relative', width: editorData.cellRef.width, height: editorData.cellRef.height}} />
            </div>;

        }
        return null;

    }

};


export default DatatableMixin;
