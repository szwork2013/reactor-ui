'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RecordAccessMixin = require('./RecordAccessMixin');

var _RecordAccessMixin2 = _interopRequireDefault(_RecordAccessMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var Cell = _react2['default'].createClass({
    displayName: 'Cell',

    mixins: [_RecordAccessMixin2['default']],

    propTypes: {
        index: _react2['default'].PropTypes.number.isRequired,
        dataProvider: _react2['default'].PropTypes.object.isRequired,
        config: _react2['default'].PropTypes.object.isRequired
    },

    getInitialState: function getInitialState() {

        return {
            edited: false,
            dataProvider: this.props.dataProvider
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {

        if (nextProps.dataProvider) {
            this.setState({ dataProvider: nextProps.dataProvider });
        }
    },

    _onClick: function _onClick(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.onClick(e, this.refs.cell, this.props.index, this.props.config);
    },

    /**
     * Renderer renders a cell value -- places color etc.
     * Formatters formats a value to a human readable form e.g. 1000000 to 1M or 1,000,000 or (some) ZYZ
     *
     *
     * @private
     */
    _getCellValue: function _getCellValue() {
        //FIXME use the mixin here
        var recData = this.getRecordData(this.props.index, this.props.config);
        var renderedData = recData.formattedValue;
        var toRenderer;

        if (recData.renderer) {
            toRenderer = { //TODO: we probably should just pass this shit
                value: recData.value,
                formattedValue: recData.formattedValue,
                record: recData.record,
                config: recData.config,
                id: recData.id,
                index: this.props.index

            };
            renderedData = recData.renderer(toRenderer);
        }

        return _react2['default'].createElement(
            'div',
            null,
            renderedData
        );
    },
    render: function render() {
        var cellStyle = {};
        var cellAlign = this.props.config.cellAlign;
        var width = this.props.config.width;
        var flex, flexInt;
        var style;
        if (cellAlign) {
            cellStyle = { textAlign: cellAlign };
        }

        if (width) {
            flex = "0 0 " + width;
        } else {
            flexInt = this.props.config.flex ? this.props.config.flex : "1";
            flex = flexInt + " 1 10px";
        }
        style = (0, _objectAssign2['default'])({ flex: flex }, this.props.config.style);
        return _react2['default'].createElement(
            'div',
            { style: { flex: flex }, ref: 'cell', onClick: this._onClick, className: 'rui-dt-cell-cont' },
            _react2['default'].createElement(
                'div',
                { style: cellStyle, className: 'rui-dt-cell' },
                this._getCellValue()
            )
        );
    }

});

module.exports = Cell;