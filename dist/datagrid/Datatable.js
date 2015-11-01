'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _GridRow = require('./GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _arrayDataProvider = require('./arrayDataProvider');

var _arrayDataProvider2 = _interopRequireDefault(_arrayDataProvider);

var _RecordAccessMixin = require('./RecordAccessMixin');

var _RecordAccessMixin2 = _interopRequireDefault(_RecordAccessMixin);

var _DatatableMixin = require('./DatatableMixin');

var _DatatableMixin2 = _interopRequireDefault(_DatatableMixin);

var Datatable = _react2['default'].createClass({
    displayName: 'Datatable',

    mixins: [_DatatableMixin2['default'], _RecordAccessMixin2['default']],

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
                dataProvider = (0, _arrayDataProvider2['default'])(data || []);
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
            return _react2['default'].createElement(_Header2['default'], { config: config, width: config.width, title: config.title || '' });
        });

        return _react2['default'].createElement(
            'div',
            { style: { position: 'relative' }, ref: 'headerCont', className: "rui-dt-colgroup" },
            _react2['default'].createElement(
                _GridRow2['default'],
                { header: true, style: 'header', ref: 'headerRow' },
                headerCells
            )
        );
    },

    _createGridRow: function _createGridRow(index) {
        var _this = this;

        var cells = [];
        this.state.colconfig.map(function (config) {
            cells.push(_react2['default'].createElement(_Cell2['default'], { onClick: _this._onCellClick, index: index, dataProvider: _this.state.dataProvider, config: config }));
        });
        return cells;
    },

    _createRecords: function _createRecords() {
        var _this2 = this;

        var dataProvider = this.state.dataProvider;

        return dataProvider.map(function (record, index) {
            return _react2['default'].createElement(
                _GridRow2['default'],
                { key: index },
                _this2._createGridRow(index)
            );
        }, 0);
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({ dataProvider: (0, _arrayDataProvider2['default'])(nextProps.data || []), colconfig: this._createColumnConfig(nextProps) });
    },

    _createBody: function _createBody() {

        return _react2['default'].createElement(
            'div',
            { ref: 'ruiDtBody', style: { height: this.props.height || "100%", overflowY: "hidden", position: 'relative' }, className: "rui-dt-rowgroup" },
            this._createRecords()
        );
    },

    _onDocumentClickEvent: function _onDocumentClickEvent(e) {
        var editorContainer = _react2['default'].findDOMNode(this.refs.editorContainer);

        if (editorContainer && !editorContainer.contains(e.target) && this.state.editorData) {
            //outside
            this.setState({ editorData: null }); //remove editor
        }
    },

    componentDidMount: function componentDidMount() {
        document.addEventListener('click', this._onDocumentClickEvent);
        if (this.refs.editorInput) {
            this.refs.editorInput.focus();
        }
    },

    componentDidUpdate: function componentDidUpdate() {
        if (this.refs.editorInput) {
            this.refs.editorInput.focus();
        }
    },

    componentWillUnmount: function componentWillUnmount() {
        document.removeEventListener('click', this._onDocumentClickEvent);
    },
    render: function render() {
        var width = this.props.width || "100%";
        return _react2['default'].createElement(
            'div',
            { className: 'rui-dt' },
            _react2['default'].createElement(
                'div',
                { style: { width: width }, className: "rui-dt-container" },
                this._createHeader(),
                this._createBody()
            ),
            this._createEditor()
        );
    }
});

exports.Datatable = Datatable;
exports['default'] = Datatable;