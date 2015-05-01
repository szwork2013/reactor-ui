/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var _ref = { React: React };
var Children = _ref.Children;

/**
 *
 * RecordProvider - used by DataGrid to render records
 *
 *
 *
 *
 */
var Datagrid = React.createClass({
    displayName: "Datagrid",

    propTypes: {
        recordProvider: React.PropTypes.object
    },

    /**
     * Return states
     *
     */
    getInitialState: function getInitialState() {
        var childColumns = [];
        Children.forEach(this.props.children, function (child, index) {
            childColumns.push(child);
        });
        return { columns: childColumns };
    },

    /**
     *
     */
    render: function render() {
        var recordProvider = this.props.recordProvider;
        var columns = React.createElement(GridColumn, { columns: this.state.columns });
        var rows = {};
        return React.createElement(
            "div",
            { className: "rui-datagrid" },
            columns,
            rows
        );
    }
});

module.exports = Datagrid;