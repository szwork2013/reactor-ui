/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Cell = React.createClass({
    displayName: "Cell",

    getInitialState: function getInitialState() {

        return { edited: false };
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
        var _props$config = this.props.config;
        var formatter = _props$config.formatter;
        var renderer = _props$config.renderer;
        var path = _props$config.path;
        var id = _props$config.id;
        var editor = _props$config.editor;

        var pathToUse = path || id; //we use path, if not id
        var dataProvider = this.props.dataProvider;
        var record = this.props.dataProvider.recordAt(this.props.index);

        return React.createElement(
            "div",
            null,
            record[pathToUse]
        );
    },
    render: function render() {

        var width = this.props.config.width;
        var flex, flexInt;
        if (width) {
            flex = "0 0 " + width;
        } else {
            flexInt = this.props.config.flex ? this.props.config.flex : "1";
            flex = flexInt + " 1 10px";
        }

        return React.createElement(
            "div",
            { style: { flex: flex }, ref: "cell", onClick: this._onClick, className: "rui-dt-cell-cont" },
            React.createElement(
                "div",
                { className: "rui-dt-cell" },
                this._getCellValue()
            )
        );
    }

});

module.exports = Cell;