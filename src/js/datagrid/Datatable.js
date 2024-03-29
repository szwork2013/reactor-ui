
import React  from 'react';
import {findDOMNode} from 'react-dom';
import Header from './Header';
import GridRow from './GridRow';
import Cell from './Cell';

import arrayDataProvider from './arrayDataProvider';
import RecordAccessMixin from './RecordAccessMixin';
import DatatableMixin from './DatatableMixin';


const colConfigHeaderCellMapper = (config) => {
    return (<Header key={config.id} config={config} width={config.width} title={config.title || ''} />);
};

const Datatable = React.createClass({

    mixins: [DatatableMixin,RecordAccessMixin],

    propTypes: {
        data: React.PropTypes.array.isRequired,
        dataProvider: React.PropTypes.func,
        pager: React.PropTypes.func,
        height: React.PropTypes.number,
        width: React.PropTypes.any
    },

    getInitialState() {
        const data = this.props.data;
        let providedDataProvider = this.props.dataProvider;
        var dataProvider;

        //use pager if it exists
        if ( this.props.pager ) {
            dataProvider = null;
        } else {
            if ( providedDataProvider ) {
                dataProvider = providedDataProvider;
            } else {
                dataProvider = arrayDataProvider(data || []);
            }
        }
        return {
            pager : this.props.pager,
            colconfig : this._createColumnConfig(),
            dataProvider : dataProvider
        };

    },


    _createHeader() {

        const headerCells = this.state.colconfig.map(colConfigHeaderCellMapper);

        return <div style={{position: 'relative'}} ref='headerCont' className={'rui-dt-colgroup'}>
            <GridRow header={true} style='header' ref='headerRow'>{headerCells}</GridRow>
        </div>;

    },

    _createGridRow : function(index) {
        var cells = [];
        this.state.colconfig.map( config => {
            cells.push(<Cell key={config.id} onClick={this._onCellClick} index={index} dataProvider={this.state.dataProvider} config={config} />);
        });
        return cells;
    },

    _createRecords : function() {

        var dataProvider = this.state.dataProvider;

        return dataProvider.map( (  record, index ) => {
            return <GridRow key={index}>{this._createGridRow(index)}</GridRow>;
        },0);

    },

    componentWillReceiveProps(nextProps) {
        this.setState({dataProvider: arrayDataProvider(nextProps.data || []),colconfig : this._createColumnConfig(nextProps) });
    },

    _createBody() {

        return <div ref='ruiDtBody' style={ { height: this.props.height || '100%', overflowY: 'hidden', position: 'relative'}} className={'rui-dt-rowgroup'} >
                {this._createRecords()}
            </div>;

    },

    _onDocumentClickEvent(e) {
        var editorContainer = findDOMNode(this.refs.editorContainer);
        if ( editorContainer && !editorContainer.contains(e.target) && this.state.editorData ) { //outside
            this.setState({editorData : null}); //remove editor
        }
    },

    componentDidMount() {
        document.addEventListener('click', this._onDocumentClickEvent);
        if ( this.refs.editorInput ) {
            this.refs.editorInput.focus();
        }
    },

    

    componentWillUnmount() {
        document.removeEventListener('click', this._onDocumentClickEvent);
    },
    render : function() {
        var width = this.props.width || '100%';
        return (
            <div className='rui-dt'>
                <div style={{width: width}} className={'rui-dt-container'}>
                    {this._createHeader()}
                    {this._createBody()}
                </div>
                {this._createEditor()}
            </div>

        );

    }
});

export {Datatable};
export default Datatable;
