/* jshint -W097 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsInput = require('../forms/Input');

var _formsInput2 = _interopRequireDefault(_formsInput);

var Children = _react2['default'].Children;

var ENTER_KEY = 13;
var ESC_KEY = 27;

var DatatableMixin = {

    _createColumnConfig: function _createColumnConfig(propsToUse) {
        var props = propsToUse || this.props;
        var children = props.children;
        var cellConfig = [];

        Children.forEach(children, function (child) {
            cellConfig.push(child.props);
        });

        return cellConfig;
    },

    _onCellClick: function _onCellClick(event, ref, index, config, id) {
        var recordData = this.getRecordData(index, config, ref);
        var editorData = (0, _objectAssign2['default'])(recordData, { oldValue: recordData.value });

        this.setState({ editorData: editorData });
    },

    _onEditorKeyDown: function _onEditorKeyDown(e) {
        var editorData = this.state.editorData;
        if (e.keyCode === ENTER_KEY) {
            if (this.props.onEdit) {
                this.props.onEdit(editorData);
            }
            this.setState({ editorData: null });
        } else if (e.keyCode === ESC_KEY) {
            this.setState({ editorData: null });
        }
    },

    _editorInputChange: function _editorInputChange(k, v) {
        var editorData = (0, _objectAssign2['default'])(this.state.editorData, {});
        editorData.value = v;
        this.setState({ editorData: editorData });
    },

    _createEditor: function _createEditor() {
        if (this.state.editorData && this.state.editorData.config.editable) {
            var editorData = this.state.editorData;
            return _react2['default'].createElement(
                'div',
                { ref: 'editorContainer', style: { left: editorData.cellRef.left, top: editorData.cellRef.top + editorData.cellRef.height, position: 'absolute' } },
                _react2['default'].createElement(_formsInput2['default'], { onKeyDown: this._onEditorKeyDown, changeListener: this._editorInputChange,
                    showLabel: false, value: editorData.value, style: { position: 'relative', width: editorData.cellRef.width, height: editorData.cellRef.height } })
            );
        }
        return null;
    }

};

module.exports = DatatableMixin;
////<input ref="editorInput" onChange={this._editorInputChange} value={editorData.value} style={{width: editorData.cellRef.width, height: editorData.cellRef.height}} />