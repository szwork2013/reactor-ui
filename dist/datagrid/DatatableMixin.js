/* jshint -W097 */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assign = _interopRequire(require("object-assign"));

var React = _interopRequire(require("react"));

var Input = _interopRequire(require("../forms/Input"));

var Children = React.Children;

var ENTER_KEY = 13;
var ESC_KEY = 27;

var DatatableMixin = {

    _createColumnConfig: function _createColumnConfig() {

        var children = this.props.children;
        var cellConfig = [];

        Children.forEach(children, function (child) {
            cellConfig.push(child.props);
        });

        return cellConfig;
    },

    _onCellClick: function _onCellClick(event, ref, index, config, id) {
        var recordData = this.getRecordData(index, config, ref);
        var editorData = assign(recordData, { oldValue: recordData.value });

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
        var editorData = assign(this.state.editorData, {});
        editorData.value = v;
        this.setState({ editorData: editorData });
    },

    _createEditor: function _createEditor() {
        if (this.state.editorData && this.state.editorData.config.editable) {
            var editorData = this.state.editorData;
            return React.createElement(
                "div",
                { ref: "editorContainer", style: { left: editorData.cellRef.left, top: editorData.cellRef.top + editorData.cellRef.height, position: "absolute" } },
                React.createElement(Input, { onKeyDown: this._onEditorKeyDown, changeListener: this._editorInputChange,
                    showLabel: false, value: editorData.value, style: { position: "relative", width: editorData.cellRef.width, height: editorData.cellRef.height } })
            );
        }
        return null;
    } };

module.exports = DatatableMixin;

////<input ref="editorInput" onChange={this._editorInputChange} value={editorData.value} style={{width: editorData.cellRef.width, height: editorData.cellRef.height}} />