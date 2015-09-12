'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _InputMixin = require('./InputMixin');

var _InputMixin2 = _interopRequireDefault(_InputMixin);

var _LabelMixin = require('./LabelMixin');

var _LabelMixin2 = _interopRequireDefault(_LabelMixin);

var _ValueChangeMixin = require('./ValueChangeMixin');

var _ValueChangeMixin2 = _interopRequireDefault(_ValueChangeMixin);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var mapOption = function mapOption(option) {
    var obj = option,
        value,
        text;
    var selectionValueKey = this.props.valueKey || 'value';
    var selectionTextKey = this.props.textKey || 'text';
    var isSelection;
    var selected = null;
    if (this._getContext().model) {
        selected = this._getContext().model[this.props.name];
    } else if (this.props.model) {
        selected = this.props.model[this.props.name];
    } else {
        selected = this.props.selected;
    }

    if (typeof obj === 'string') {
        value = obj;
        text = obj;
    } else {
        value = obj[selectionValueKey];
        text = obj[selectionTextKey];
    }
    if (selected && selected === value) {
        isSelection = true;
    } else {
        isSelection = false; //make sure to reset
    }

    return _react2['default'].createElement(
        'option',
        { value: value, selected: isSelection },
        text
    );
};

var Select = (0, _radium2['default'])(_react2['default'].createClass({
    propTypes: {
        selected: _react2['default'].PropTypes.string,
        name: _react2['default'].PropTypes.string.isRequired,
        labelInline: _react2['default'].PropTypes.bool,
        labelWidth: _react2['default'].PropTypes.any,
        inputWidth: _react2['default'].PropTypes.any,
        onChange: _react2['default'].PropTypes.func,
        model: _react2['default'].PropTypes.object
    },
    getDefaultProps: function getDefaultProps() {
        return _defaultProps2['default'].input;
    },
    mixins: [_InputMixin2['default'], _LabelMixin2['default'], _ValueChangeMixin2['default']],

    contextTypes: {
        model: _react2['default'].PropTypes.object.isRequired,
        changeListener: _react2['default'].PropTypes.any,
        inputRegistry: _react2['default'].PropTypes.any
    },

    _getOptions: function _getOptions() {
        return this.props.selection || this.props.options || [];
    },

    createOptions: function createOptions() {

        var optional = this.props.optional === false ? this.props.optional : true;
        var optionalText = this.props.optionalText || '';
        var options = this._getOptions();

        var optionsEls = options.map(mapOption.bind(this));
        if (optional) {
            optionsEls.unshift(_react2['default'].createElement(
                'option',
                { value: '' },
                optionalText
            ));
        }
        return optionsEls;
    },

    render: function render() {
        // const params = this.getInputParams();
        var styleArr = [_style2['default'].inputStyle];

        if (this.props.labelInline === true) {
            styleArr.push(_style2['default'].inputStyleInline);
            styleArr.push({ width: this.props.inputWidth });
        } else {
            styleArr.push(_style2['default'].inputStyleBlock);
        }

        return _react2['default'].createElement(
            'div',
            null,
            this.getLabel(),
            _react2['default'].createElement(
                'select',
                { style: styleArr, disabled: this.props.readOnly, ref: this.inputRef, onChange: this.dispatchInputChange },
                this.createOptions()
            )
        );
    }

}));

exports['default'] = Select;
module.exports = exports['default'];