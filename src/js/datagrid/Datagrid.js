/*globals require,module,document */
/* jshint -W097, esnext: true */
'use strict';

import React  from 'react';
import Header from './Header';
import GridRow from './GridRow';
import Cell from './Cell';
import arrayDataProvider from './arrayDataProvider';
import RecordAccessMixin from './RecordAccessMixin';
import VScroller from './VScroller';


var {Children} =  React ;
const VSCROLL_WIDTH = 16;


var createCellConfig = function(children,availableWidth) {

    var cellConfig = [];
    var totalParts;
    var minSetWidthDiff;
    var width = availableWidth;

    Children.forEach(children, (child)=> {
        if ( !child.props.flex ) {
            child.props.flex = 1;
        }
        cellConfig.push(child.props);
    });

    totalParts = cellConfig.reduce( (prev,current) => {

        return prev + ( parseInt(current.flex) || 1 );
    },0);

    cellConfig = cellConfig.map( config => {
        if ( !config.width ) {
            minSetWidthDiff = width * ( config.flex / totalParts ) - config.minWidth;
            config.width = Math.max(width * ( config.flex / totalParts ),config.minWidth ||0);
        }
        return config;
    });

    return cellConfig;
};

var getConfiguredWidth = function(inputWidth) {
    if ( typeof inputWidth === 'number' ) {
        return inputWidth;
    }
    return undefined;
};

const Datagrid = React.createClass({
    mixins: [RecordAccessMixin],

    propTypes: {
        rowHeight: React.PropTypes.number
    },

    getDefaultProps: function() {
        return {
            rowHeight: 24,
            height: 'auto',
            width: 'auto'
        };
    },

    /**
     * We need to wait, so initial state would all be empty
     *
     */
    getInitialState() {

        var dataProvider = this.props.dataProvider;
        var data = this.props.data || [];
        if ( !dataProvider ) {
            dataProvider = arrayDataProvider(data);
        }

        return {
            cellConfig : [],
            dataProvider: dataProvider,
            initialized : false,
            width: 0
        };

    },



    _createHeader : function() {

        if ( !this.state.initialized ) {
            return null;
        }


        var headerCells = this.state.cellconfig.map( config => {
            return (<Header width={config.width} title={config.title || config.id} />);
        });

        return <div style={{position: 'relative', height: this.props.rowHeight}} ref="headerCont" className={"rui-dg-headercont"}>
            <GridRow ref='headerRow' width={this.state.width}>{headerCells}</GridRow>
        </div>;
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
        var rows = [];
        var startTop =  0;
        var visibleRows = this.state.visibleRows;
        var scrollPosition = this.state.scrollPosition || 0;
        var startIdx = scrollPosition % 24;
        var div = parseInt(scrollPosition / 24);
        var startPos = 0;

        if ( scrollPosition > 0 ) {
            startPos =  (div * 24 ) - scrollPosition;
        }

        var k = 0;

        for ( var i=div; i < (div + visibleRows); i++ ) {
            if ( i > dataProvider.length -1 ) {
                break;
            }
            rows.push(<GridRow width={this.state.width} position={'absolute'} top={startPos} key={k++}>{this._createGridRow(i)}</GridRow>);
            startPos += 24;
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
        var dataProvider = this.state.dataProvider;
        var rootNode = React.findDOMNode(this);
        var currentNode = rootNode.parentNode;
        var containerWidth = rootNode.parentNode.offsetWidth;

        while ( !containerWidth ) {
            currentNode = currentNode.parentNode;
            if ( currentNode ) {
                containerWidth = currentNode.offsetWidth;
                if ( containerWidth ) {
                    //console.log('found parent from: ' + currentNode);
                    //console.log(currentNode);
                }
            } else {
                break;
            }
        }

        var configuredWidth = getConfiguredWidth(this.props.width);
        var width = (configuredWidth || containerWidth );
        var visibleRows = parseInt(400 / 24) +2;


        this.setState({ scrollPosition: 0, visibleRows: visibleRows, virtualBodyHeight : 24 * dataProvider.length,  bodyHeight: 400, width: width-16, initialized: true, cellconfig:createCellConfig(this.props.children,width -16) });

        document.addEventListener('click', this._onDocumentClickEvent);
    },
    componentWillUnmount() {
        document.removeEventListener('click', this._onDocumentClickEvent);
    },
    _createEditor() {
        if ( this.state.editorData ) {
            var editorData = this.state.editorData;

            return <div  ref="editorContainer" style={{ left: editorData.cellRef.left, top: editorData.cellRef.top,position: 'absolute'}}>
                <input ref="editorInput" style={{width: editorData.cellRef.width, height: editorData.cellRef.height}} defaultValue={editorData.value}></input>
            </div>;
        }
        return null;

    },

    _renderGridBody() {
        if ( !this.state.initialized ) {
            return null;
        }
        return <div style={ { position: 'relative', overflow: 'hidden', height: this.state.bodyHeight } }>
            <div style={ { height: this.state.virtualBodyHeight, position: 'relative'} }>
                {this._createRecords()}
            </div>
        </div>;

    },


    _verticalScroller() {

        if ( this.state.visibleRows < this.state.dataProvider.length ) {
           // return null;
            return <VScroller scrollHeight={this.state.scrollHeight} />;
        } else {
            return null;
        }

        /*

        */
    },

    _onWheel(evt) {

        var deltaY = evt.deltaY;
        var isDeltaPositive = deltaY > 0;
        var movement = deltaY / 8;

        this.setState({scrollPosition : this.state.scrollPosition +  movement });
    },

    _onCellClick(event,ref,index,config,id) {
        var recordData = this.getRecordData(index,config,ref);
        this.setState( { editorData : recordData });
    },

    /**
     *
     */
    render : function() {

        return (
                <div onWheel={this._onWheel} style={ { width: this.state.width + 16}} className="rui-dg">
                    <div className={"rui-dg-main"}>
                        {this._createHeader()}
                        {this._renderGridBody()}
                    </div>
                    {this._verticalScroller()}
                    {this._createEditor()}
                </div>

        );

    }

});

module.exports =  Datagrid;
