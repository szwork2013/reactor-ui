'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputMixin = require('./InputMixin');

var _InputMixin2 = _interopRequireDefault(_InputMixin);

var _LabelMixin = require('./LabelMixin');

var _LabelMixin2 = _interopRequireDefault(_LabelMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var parseText = function parseText(path, obj) {

    if (typeof obj === 'string') {
        return obj;
    }
    if (obj) {
        return obj[path || 'text'];
    }
    return '';
};

var AutoCompleteResult = _react2['default'].createClass({
    displayName: 'AutoCompleteResult',

    resultItemClicked: function resultItemClicked(index) {
        this.props.onResultItemClicked(this.props.data[index]);
    },

    createResultItem: function createResultItem(result, index) {
        var text = parseText(this.props.selectionPath, result);
        var rendered = text;
        if (this.props.selectionRenderer) {
            rendered = this.props.selectionRenderer(text, result);
        }
        return _react2['default'].createElement(
            'div',
            { onClick: this.resultItemClicked.bind(null, index), dataIndex: index, className: 'rui-form-ac-result', style: { padding: '8px 6px' } },
            rendered
        );
    },
    render: function render() {
        var _this = this;

        var display = this.props.data ? 'block' : 'none';
        var pos = this.props.anchorPosition;
        var style = (0, _objectAssign2['default'])({ border: '1px solid #D1D1D1', borderTop: 'none', display: display, position: 'absolute' }, pos);

        return _react2['default'].createElement(
            'div',
            { className: 'rui-form-ac-result-cont', style: style },
            (this.props.data || []).map(function (res, index) {
                return _this.createResultItem(res, index);
            })
        );
    }

});

var KEY_BACKSPACE = 8;
var KEY_ESC = 27;

var AutoComplete = _react2['default'].createClass({
    displayName: 'AutoComplete',

    propTypes: {
        requiredName: _react2['default'].PropTypes.string.isRequired,
        selectionPath: _react2['default'].PropTypes.string,
        selectionRenderer: _react2['default'].PropTypes.func,
        searchPath: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.array])
    },

    getDefaultProps: function getDefaultProps() {
        return {
            selectionRenderer: undefined,
            selectionPath: 'text'
        };
    },

    mixins: [_InputMixin2['default'], _LabelMixin2['default']],

    contextTypes: {
        model: _react2['default'].PropTypes.object.isRequired,
        changeListener: _react2['default'].PropTypes.any,
        inputRegistry: _react2['default'].PropTypes.any
    },

    getInitialState: function getInitialState() {
        return { results: undefined, inputActive: false, hasValue: this.getValue() ? true : false, hasPlaceholder: this.props.placeholder ? true : false };
    },

    getValue: function getValue() {
        return this.getInputValue();
    },

    determineAnchorAbsolutePos: function determineAnchorAbsolutePos() {

        var anchorEl = _react2['default'].findDOMNode(this.refs.acCont);
        var computedStyle = window.getComputedStyle(anchorEl);
        var computedHeight = computedStyle.getPropertyValue('height');
        var computedWidth = computedStyle.getPropertyValue('width');

        var adjustmentHeight = parseInt(computedHeight, 10);
        var width = parseInt(computedWidth, 10);
        var x = 0;
        var y = 0;

        x += anchorEl.offsetLeft - anchorEl.scrollLeft + anchorEl.clientLeft;
        y += anchorEl.offsetTop - anchorEl.scrollTop + anchorEl.clientTop;

        return { left: x - 1, top: y + adjustmentHeight, width: width };
    },

    _searchObjectFilter: function _searchObjectFilter(searchStr, obj) {
        var tosearch, str;
        var searchFields;
        if (typeof this.props.searchPath === 'string') {
            searchFields = [];
            searchFields.push(this.props.searchPath);
        } else if (Array.isArray(this.props.searchPath)) {
            searchFields = this.props.searchPath;
        }

        if (searchFields) {
            tosearch = {};
            searchFields.forEach(function (field) {
                return tosearch[field] = obj[field];
            });
        } else {
            tosearch = obj;
        }

        str = JSON.stringify(tosearch);
        return str.includes(searchStr);
    },

    showMatchingResults: function showMatchingResults(query) {

        var data = this.props.data || [];
        var results = data.filter(this._searchObjectFilter.bind(this, query));

        this.setState({ results: results, anchorPosition: this.determineAnchorAbsolutePos() });
    },

    acInputChange: function acInputChange() {
        var _this2 = this;

        if (this._acqueryRunner) {
            clearTimeout(this._acqueryRunner);
        }
        var inputVal = _react2['default'].findDOMNode(this.refs.acInput).value;

        var run = function run() {
            _this2.showMatchingResults(inputVal);
        };
        this._acqueryRunner = setTimeout(run, 500);
    },

    resultSelected: function resultSelected(selected) {
        try {
            if (this.props.selectionListener) {
                this.props.selectionListener(selected);
            }
        } catch (ex) {}
        this.setState({ results: undefined, selection: selected });
    },

    onKeyUp: function onKeyUp(e) {

        if (e.keyCode === KEY_BACKSPACE) {
            _react2['default'].findDOMNode(this.refs.acInput).value = '';
            this.setState({ selection: undefined });
        } else if (e.keyCode === KEY_ESC) {
            this.setState({ results: undefined });
        }
    },
    showResults: function showResults() {
        if (this.state.results) {
            return _react2['default'].createElement(AutoCompleteResult, { selectionPath: this.props.selectionPath, onResultItemClicked: this.resultSelected, data: this.state.results, anchorPosition: this.state.anchorPosition });
        } else {
            return undefined;
        }
    },
    renderToggle: function renderToggle() {
        return _react2['default'].createElement(
            'div',
            { style: { top: 14, right: 10, position: 'absolute' } },
            _react2['default'].createElement('div', { className: 'rui-arrow-down rui-arrow-down-inactive' })
        );
    },

    _parseValue: function _parseValue(obj) {
        return parseText(this.props.selectionPath || 'text', obj);
    },
    renderInput: function renderInput() {
        var value;
        if (this.state.selection) {
            value = this._parseValue(this.state.selection);
        }

        return _react2['default'].createElement('input', { onKeyDown: this.onKeyUp, value: value, ref: 'acInput', onChange: this.acInputChange, placeholder: this.props.placeholder, type: 'text', autoComplete: 'off',
            style: { height: '100%', width: '100%', position: 'relative', left: '0px', tabindex: 'tabindex' } });
    },
    render: function render() {
        var params = this.getInputParams();
        var style = (0, _objectAssign2['default'])({ position: 'relative' }, params.style);

        return _react2['default'].createElement(
            'div',
            { className: 'rui-form-cont' },
            this.getLabel(),
            _react2['default'].createElement(
                'div',
                { style: style, ref: 'acCont', className: 'rui-form-ac-cont rui-form-input ' + params.className, onClick: this.containerClick },
                this.renderInput(),
                this.renderToggle()
            ),
            this.showResults()
        );
    }

});

module.exports = AutoComplete;