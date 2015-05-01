/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

import React  from 'react';
import Header from './Header';
import GridRow from './GridRow';
import Cell from './Cell';
import ArrayDataProvider from './ArrayDataProvider';
import RecordAccessMixin from './RecordAccessMixin';

var {Children} =  React ;





const Datagrid = React.createClass({
    mixins: [RecordAccessMixin],

    propTypes: {
        width: React.PropTypes.number
    },


    /**
     * Return states
     *
     */
    getInitialState() {
        var cellConfig = [];
        var totalParts;
        Children.forEach(this.props.children, (child)=> {
            if ( !child.props.flex ) {
                child.props.flex = 1;
            }
            cellConfig.push(child.props);
        });
        totalParts = cellConfig.reduce( (prev,current) => {
            return prev + ( parseInt(current.flex) || 1 );
        },0);

        cellConfig = cellConfig.map( config => {
            config['width'] = this.props.width * ( config.flex / totalParts );
            return config;
        });

        var dataProvider = this.props.dataProvider;
        var data = this.props.data || [];
        if ( !dataProvider ) {
            dataProvider = ArrayDataProvider(data);
        }
        return ( { width: this.props.width, cellconfig : cellConfig , dataProvider: dataProvider } );
    },



    _createHeader : function() {

        var headerCells = this.state.cellconfig.map( config => {
            return <Header width={config.width} title={config.title || config.id} />
        });
        return <GridRow ref='headerRow' width={this.state.width}>{headerCells}</GridRow>
    },

    _createGridRow : function(index) {
        var cells = [];
        this.state.cellconfig.map( config => {
            cells.push(<Cell onClick={this._onCellClick} index={index} dataProvider={this.state.dataProvider} config={config} />);
        });
        return cells;
    },

    _createRecords : function() {

        //dumb mode for now
        var dataProvider = this.state.dataProvider;
        var rows = []; //we will not do this in actuall,only the records we can render: FIXME

        for ( var i=0; i< dataProvider.length; i++ ) {
            rows.push(<GridRow>{this._createGridRow(i)}</GridRow>);
        }



        return {rows};
    },

    _onDocumentClickEvent(e) {
        var editorContainer = React.findDOMNode(this.refs.editorContainer);

        if ( editorContainer && !editorContainer.contains(e.target) && this.state.editorData ) {
            //outside
            this.setState({editorData : null}); //remove editor
        }
    },
    componentDidUpdate() {

        //FIXME: TEMPORARY, this should be done on the editor as a separate component.
        var editorContainer = React.findDOMNode(this.refs.editorContainer);
        var editorInput = React.findDOMNode(this.refs.editorInput);
        if ( editorInput ) {
            editorInput.focus();
        }
    },
    componentDidMount() {
        document.addEventListener('click', this._onDocumentClickEvent);
    },
    componentWillUnmount() {
        document.removeEventListener('click', this._onDocumentClickEvent);
    },
    _createEditor() {
        if ( this.state.editorData ) {
            var editorData = this.state.editorData;

            return <div ref="editorContainer" style={{left: editorData.cellRef.left, top: editorData.cellRef.top,position: 'absolute'}}>
                <input ref="editorInput" style={{width: editorData.cellRef.width, height: editorData.cellRef.height}} defaultValue={editorData.value}></input>
            </div>

        }
        return null;


    },

    /**
;     *
     */
    render : function() {

        return (
            <div style={ {borderTop: "1px solid #EEE", borderLeft: "1px solid #EEE", borderBottom: "1px solid #EEE", height: this.props.height}} className="rui-dg">

                <div className={"rui-dg-headercont"}>{this._createHeader()}</div>
                <div style={{ overflow: 'hidden', height: this.props.height}} className={"rui-dg-rowcont"}>
                    {this._createRecords()}
                </div>
                {this._verticalScroller()}
                {this._createEditor()}
            </div>
        );

    },

    _verticalScroller() {
        return <div style={ { height: this.props.height , width: 20}} className={"rui-dg-vscroller"}>
            <div  style={ { borderRadius: 2, margin: 4, backgroundColor : "#959595", width: 12, height: 30}}></div>
        </div>
    },

    _onCellClick(event,ref,index,config,id) {
        var recordData = this.getRecordData(index,config,ref);
        this.setState( { editorData : recordData });
    }

});

module.exports =  Datagrid;