/*globals require,module,document */
/* jshint -W097, esnext: true */
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assign = _interopRequire(require("object-assign"));

var React = _interopRequire(require("react"));

var Children = React.Children;

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
        this.setState({ editorData: recordData });
    },

    _editorInputChange: function _editorInputChange() {
        var editorData = assign(this.state.editorData, {});
        var inputNode = React.findDOMNode(this.refs.editorInput);
        editorData.value = inputNode.value;
        this.setState({ editorData: editorData });
    },

    _createEditor: function _createEditor() {
        if (this.state.editorData) {
            var editorData = this.state.editorData;
            return React.createElement(
                "div",
                { ref: "editorContainer", style: { left: editorData.cellRef.left, top: editorData.cellRef.top + editorData.cellRef.height, position: "absolute" } },
                React.createElement("input", { ref: "editorInput", onChange: this._editorInputChange, value: editorData.value, style: { width: editorData.cellRef.width, height: editorData.cellRef.height } })
            );
        }
        return null;
    },

    editorInputChange: function editorInputChange(e) {}

};

module.exports = DatatableMixin;