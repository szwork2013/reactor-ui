'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _TableColumns = require('./TableColumns');

var _styles = require('./styles');

var Cell = function Cell(props) {
    var col = props.col;
    var data = props.data;
    var id = col.id;
    var path = col.path;
    var formatter = col.formatter;
    var renderer = col.renderer;

    var val = data[id];
    return _react2['default'].createElement(
        'div',
        null,
        val
    );
};

exports.Cell = Cell;
var Tbody = function Tbody(props) {
    var cellTdStyle = (0, _objectAssign2['default'])(_styles.cellStyle, _styles.baseCellStyle);

    return _react2['default'].createElement(
        'tbody',
        null,
        props.data.map(function (data, idx) {
            return _react2['default'].createElement(
                'tr',
                { key: "data" + "-" + idx },
                props.cols.map(function (col, idxc) {
                    return _react2['default'].createElement(
                        'td',
                        { key: col.id + "-" + idx + "-" + idxc, style: cellTdStyle },
                        _react2['default'].createElement(Cell, _extends({}, props, { data: data, col: col }))
                    );
                })
            );
        })
    );
};

exports.Tbody = Tbody;
Tbody.propTypes = {
    data: _react2['default'].PropTypes.array.isRequired,
    cols: _react2['default'].PropTypes.array.isRequired
};

var Table = _react2['default'].createClass({
    displayName: 'Table',

    propTypes: {
        data: _react2['default'].PropTypes.array.isRequired
    },

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { style: { position: 'relative', zIndex: 10, height: 300, overflow: 'auto' } },
            _react2['default'].createElement(
                'table',
                { style: _styles.baseTableStyle },
                _react2['default'].createElement(_TableColumns.ColGroup, this.props),
                _react2['default'].createElement(_TableColumns.Thead, this.props),
                _react2['default'].createElement(Tbody, this.props)
            )
        );
    }

});

exports['default'] = Table;