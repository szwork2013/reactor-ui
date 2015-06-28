"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var InputMixin = _interopRequire(require("./InputMixin"));

var LabelMixin = _interopRequire(require("./LabelMixin"));

var assign = _interopRequire(require("object-assign"));

var AutoCompleteResult = React.createClass({
    displayName: "AutoCompleteResult",

    resultItemClicked: function resultItemClicked(index) {
        this.props.onResultItemClicked(this.props.data[index]);
    },

    createResultItem: function createResultItem(result, index) {
        return React.createElement(
            "div",
            { onClick: this.resultItemClicked.bind(null, index), dataIndex: index, className: "rui-form-ac-result", style: { padding: "8px 6px" } },
            result.text
        );
    },
    render: function render() {
        var _this = this;

        var display = this.props.data ? "block" : "none";
        var pos = this.props.anchorPosition;
        var style = assign({ border: "1px solid #D1D1D1", borderTop: "none", display: display, position: "absolute" }, pos);

        return React.createElement(
            "div",
            { style: style },
            (this.props.data || []).map(function (res, index) {
                return _this.createResultItem(res, index);
            })
        );
    }

});

var KEY_BACKSPACE = 8;

var AutoComplete = React.createClass({
    displayName: "AutoComplete",

    propTypes: {
        requiredName: React.PropTypes.string.isRequired
    },
    mixins: [InputMixin, LabelMixin],

    contextTypes: {
        model: React.PropTypes.object.isRequired,
        changeListener: React.PropTypes.any,
        inputRegistry: React.PropTypes.any
    },

    getInitialState: function getInitialState() {
        return { results: undefined, inputActive: false, hasValue: this.getValue() ? true : false, hasPlaceholder: this.props.placeholder ? true : false };
    },

    getValue: function getValue() {
        return this.getInputValue(); // this.props.model[this.props.name] || "";
    },

    determineAnchorAbsolutePos: function determineAnchorAbsolutePos() {

        var anchorEl = React.findDOMNode(this.refs.acCont);
        var computedStyle = window.getComputedStyle(anchorEl);
        var computedHeight = computedStyle.getPropertyValue("height");
        var computedWidth = computedStyle.getPropertyValue("width");

        var adjustmentHeight = parseInt(computedHeight, 10);
        var width = parseInt(computedWidth, 10);
        var x = 0;
        var y = 0;

        x += anchorEl.offsetLeft - anchorEl.scrollLeft + anchorEl.clientLeft;
        y += anchorEl.offsetTop - anchorEl.scrollTop + anchorEl.clientTop;

        return { left: x - 1, top: y + adjustmentHeight, width: width };
    },

    showMatchingResults: function showMatchingResults(query) {
        var str;
        var data = this.props.data || [];
        var results = data.filter(function (datum) {
            str = JSON.stringify(datum);
            return str.includes(query);
        });

        this.setState({ results: results, anchorPosition: this.determineAnchorAbsolutePos() });
    },

    acInputChange: function acInputChange() {
        var _this = this;

        if (this._acqueryRunner) {
            clearTimeout(this._acqueryRunner);
        }
        var inputVal = React.findDOMNode(this.refs.acInput).value;

        var run = function () {
            _this.showMatchingResults(inputVal);
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
            React.findDOMNode(this.refs.acInput).value = "";
            this.setState({ selection: undefined });
        }
    },
    showResults: function showResults() {
        if (this.state.results) {
            return React.createElement(AutoCompleteResult, { onResultItemClicked: this.resultSelected, data: this.state.results, anchorPosition: this.state.anchorPosition });
        } else {
            return undefined;
        }
    },
    renderToggle: function renderToggle() {
        return React.createElement(
            "div",
            { style: { top: 14, right: 10, position: "absolute" } },
            React.createElement("div", { className: "rui-arrow-down rui-arrow-down-inactive" })
        );
    },
    renderInput: function renderInput() {
        var value, obj;
        if (this.state.selection) {
            value = this.state.selection.text;
        } else {
            obj = this.getInputValue();
            if (obj) {
                value = obj.text;
            }
        }
        return React.createElement("input", { onKeyDown: this.onKeyUp, value: value, ref: "acInput", onChange: this.acInputChange, placeholder: this.props.placeholder, type: "text", autoComplete: "off",
            style: { height: "100%", width: "100%", position: "relative", left: "0px", tabindex: "tabindex" } });
    },
    render: function render() {
        var params = this.getInputParams();
        var style = assign({ position: "relative" }, params.style);

        return React.createElement(
            "div",
            { className: "rui-form-cont" },
            this.getLabel(),
            React.createElement(
                "div",
                { style: style, ref: "acCont", className: "rui-form-ac-cont rui-form-input " + params.className, onClick: this.containerClick },
                this.renderInput(),
                this.renderToggle()
            ),
            this.showResults()
        );
    }

});

module.exports = AutoComplete;