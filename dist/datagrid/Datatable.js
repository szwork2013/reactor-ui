
/* jshint -W097 */
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Header = _interopRequire(require("./Header"));

var GridRow = _interopRequire(require("./GridRow"));

var Cell = _interopRequire(require("./Cell"));

var arrayDataProvider = _interopRequire(require("./arrayDataProvider"));

var RecordAccessMixin = _interopRequire(require("./RecordAccessMixin"));

var DatatableMixin = _interopRequire(require("./DatatableMixin"));

var Datatable = React.createClass({
    displayName: "Datatable",

    mixins: [DatatableMixin, RecordAccessMixin],

    getInitialState: function getInitialState() {
        var data = this.props.data;
        var providedDataProvider = this.props.dataProvider;
        var dataProvider;

        //use pager if it exists
        if (this.props.pager) {
            dataProvider = null;
        } else {

            if (providedDataProvider) {
                dataProvider = providedDataProvider;
            } else {
                dataProvider = arrayDataProvider(data || []);
            }
        }
        return {
            pager: this.props.pager,
            maxHeight: this.props.maxHeight,
            colconfig: this._createColumnConfig(),
            dataProvider: dataProvider
        };
    },

    _createHeader: function _createHeader() {

        var headerCells = this.state.colconfig.map(function (config) {
            return React.createElement(Header, { config: config, width: config.width, title: config.title || "" });
        });

        return React.createElement(
            "div",
            { style: { position: "relative" }, ref: "headerCont", className: "rui-dt-colgroup" },
            React.createElement(
                GridRow,
                { header: true, style: "header", ref: "headerRow" },
                headerCells
            )
        );
    },

    _createGridRow: function _createGridRow(index) {
        var _this = this;

        var cells = [];
        this.state.colconfig.map(function (config) {
            cells.push(React.createElement(Cell, { onClick: _this._onCellClick, index: index, dataProvider: _this.state.dataProvider, config: config }));
        });
        return cells;
    },

    _createRecords: function _createRecords() {
        var _this = this;

        var dataProvider = this.state.dataProvider;

        return dataProvider.map(function (record, index) {
            return React.createElement(
                GridRow,
                { key: index },
                _this._createGridRow(index)
            );
        }, 0);
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({ dataProvider: arrayDataProvider(nextProps.data || []) });
    },

    _createBody: function _createBody() {

        return React.createElement(
            "div",
            { ref: "ruiDtBody", style: { height: this.props.height || "100%", overflowY: "hidden", position: "relative" }, className: "rui-dt-rowgroup" },
            this._createRecords()
        );
    },

    _onDocumentClickEvent: function _onDocumentClickEvent(e) {
        var editorContainer = React.findDOMNode(this.refs.editorContainer);

        if (editorContainer && !editorContainer.contains(e.target) && this.state.editorData) {
            //outside
            this.setState({ editorData: null }); //remove editor
        }
    },

    componentDidMount: function componentDidMount() {
        document.addEventListener("click", this._onDocumentClickEvent);
        if (this.refs.editorInput) {
            this.refs.editorInput.getDOMNode().focus();
        }
    },

    componentDidUpdate: function componentDidUpdate() {
        if (this.refs.editorInput) {
            this.refs.editorInput.getDOMNode().focus();
        }
    },

    componentWillUnmount: function componentWillUnmount() {
        document.removeEventListener("click", this._onDocumentClickEvent);
    },
    render: function render() {
        var width = this.props.width || "100%";
        return React.createElement(
            "div",
            { className: "rui-dt" },
            React.createElement(
                "div",
                { style: { width: width }, className: "rui-dt-container" },
                this._createHeader(),
                this._createBody()
            ),
            this._createEditor()
        );
    }
});

module.exports = Datatable;