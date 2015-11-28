
import React from 'react';
import RecordAccessMixin from './RecordAccessMixin';
import assign from 'object-assign';
import {baseCellStyle, baseCellContainerStyle} from './styles';

var Cell = React.createClass({

    mixins: [RecordAccessMixin],

    propTypes: {
        index: React.PropTypes.number.isRequired,
        dataProvider: React.PropTypes.object.isRequired,
        config: React.PropTypes.object.isRequired,
        onClick: React.PropTypes.func
    },

    getInitialState() {

        return {
            edited : false,
            dataProvider: this.props.dataProvider
        };
    },
    componentWillReceiveProps(nextProps) {

        if ( nextProps.dataProvider ) {
            this.setState ( { dataProvider: nextProps.dataProvider});
        }

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
        var recData = this.getRecordData(this.props.index,this.props.config);
        var renderedData = recData.formattedValue;
        var toRenderer;

        if ( recData.renderer ) {
            toRenderer = { 
                value: recData.value,
                formattedValue: recData.formattedValue,
                record: recData.record,
                config: recData.config,
                id: recData.id,
                index: this.props.index

            };
            renderedData = recData.renderer(toRenderer);
        }

        return <div>{renderedData}</div>;
    },
    render() {
        let cellStyle = {};
        const cellAlign = this.props.config.cellAlign;
        const width = this.props.config.width;
        let flex, flexInt;

        if ( cellAlign ) {
            cellStyle = { textAlign: cellAlign };
        }

        if ( width ) {
            flex = '0 0 ' + width;
        } else {
            flexInt = this.props.config.flex ? this.props.config.flex : '1';
            flex = flexInt + ' 1 10px';
        }
        const style = assign(baseCellContainerStyle, {flex: flex},this.props.config.style);
        return (
            <div style={style}  ref="cell" onClick={this._onClick}>
                <div style={assign(baseCellStyle,cellStyle)} className="rui-dt-cell">{this._getCellValue()}</div>
            </div>
        );

    }


});


export default Cell;
