'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

var _TableColumns = require('./TableColumns');

var _TableColumns2 = _interopRequireDefault(_TableColumns);

var _Scroller = require('./Scroller');

var _Scroller2 = _interopRequireDefault(_Scroller);

var _utils = require('./utils');

var Datagrid = _react2['default'].createClass({
    displayName: 'Datagrid',

    propTypes: {
        data: _react2['default'].PropTypes.array
    },

    render: function render() {
        var cols = (0, _utils.createColumnConfig)(this.props);
        return _react2['default'].createElement(
            _Scroller2['default'],
            null,
            _react2['default'].createElement(_Table2['default'], { data: this.props.data, cols: cols }),
            _react2['default'].createElement(_TableColumns2['default'], { cols: cols })
        );
    }

});
exports.Datagrid = Datagrid;
exports['default'] = Datagrid;