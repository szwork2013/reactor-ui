
'use strict';

import React from 'react';
import RecordAccessMixin from './RecordAccessMixin';

var Cell = React.createClass({

    mixins: [RecordAccessMixin],

    propTypes: {
        index: React.PropTypes.number.isRequired,
        dataProvider: React.PropTypes.object.isRequired,
        config: React.PropTypes.object.isRequired
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
        var renderedData = recData.value;
        var toRenderer;

        if ( recData.renderer ) {
            toRenderer = { //TODO: we probably should just pass this shit
                    value: recData.value,
                    formattedValue: recData.formattedValue,
                    record: recData.record,
                    config: recData.config,
                    id: recData.id
            };
            renderedData = recData.renderer(toRenderer);
        }

        return <div>{renderedData}</div>;
    },
    render() {
        var cellStyle = {};
        var cellAlign = this.props.config.cellAlign;
        var width = this.props.config.width;
        var flex,flexInt;

        if ( cellAlign ) {
            cellStyle = { textAlign: cellAlign };
        }

        if ( width ) {
            flex = "0 0 " + width;
        } else {
            flexInt = this.props.config.flex ? this.props.config.flex : "1";
            flex = flexInt + " 1 10px";
        }

        return (
            <div style={{flex : flex}}  ref="cell" onClick={this._onClick} className="rui-dt-cell-cont">
                <div style={cellStyle} className="rui-dt-cell">{this._getCellValue()}</div>
            </div>
        );

    }


});


module.exports = Cell;
