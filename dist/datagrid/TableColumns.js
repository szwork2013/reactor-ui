'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _styles = require('./styles');

var _formsStringUtil = require('../forms/stringUtil');

var _formsStringUtil2 = _interopRequireDefault(_formsStringUtil);

var ColGroup = function ColGroup(props) {

    return _react2['default'].createElement(
        'colgroup',
        null,
        props.cols.map(function (col, idx) {
            var width = {};
            if (col.width) {
                width.width = col.width;
            }
            return _react2['default'].createElement('col', { key: col.id + "-col-" + idx, style: width });
        })
    );
};

exports.ColGroup = ColGroup;
ColGroup.propTypes = {
    cols: _react2['default'].PropTypes.array.isRequired
};

var Thead = function Thead(props) {
    var colStyle = (0, _objectAssign2['default'])({}, _styles.columnStyle, _styles.cellStyle, { height: 25 });
    return _react2['default'].createElement(
        'thead',
        null,
        _react2['default'].createElement(
            'tr',
            null,
            props.cols.map(function (col, idx) {
                var title = col.title || _formsStringUtil2['default'].createLabel(col.id);
                return _react2['default'].createElement(
                    'th',
                    { key: col.id + "-" + idx, style: colStyle },
                    title
                );
            })
        )
    );
};

exports.Thead = Thead;
Thead.propTypes = {
    cols: _react2['default'].PropTypes.array.isRequired
};

var TableColumns = _react2['default'].createClass({
    displayName: 'TableColumns',

    propTypes: {
        cols: _react2['default'].PropTypes.array
    },

    render: function render() {

        return _react2['default'].createElement(
            'div',
            { style: { position: 'absolute', zIndex: 111111, top: 0, left: 0, overflow: 'hidden' } },
            _react2['default'].createElement(
                'table',
                { style: _styles.baseTableStyle },
                _react2['default'].createElement(ColGroup, this.props),
                _react2['default'].createElement(Thead, this.props),
                _react2['default'].createElement('tbody', null)
            )
        );
    }

});

exports['default'] = TableColumns;