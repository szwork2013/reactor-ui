
/* jshint esnext: true, -W097 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputMixin = require('./InputMixin');

var _InputMixin2 = _interopRequireDefault(_InputMixin);

var _LabelMixin = require('./LabelMixin');

var _LabelMixin2 = _interopRequireDefault(_LabelMixin);

var _ValueChangeMixin = require('./ValueChangeMixin');

var _ValueChangeMixin2 = _interopRequireDefault(_ValueChangeMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var mapOption = function mapOption(option) {
    var obj = option,
        value,
        text;
    var selectionValueKey = this.props.valueKey || 'value';
    var selectionTextKey = this.props.textKey || 'text';
    var isSelection;
    var selected = this._getContext().model[this.props.name];

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

var Select = _react2['default'].createClass({
    displayName: 'Select',

    propTypes: {
        name: _react2['default'].PropTypes.string.isRequired,
        labelInline: _react2['default'].PropTypes.bool,
        labelWidth: _react2['default'].PropTypes.any,
        inputWidth: _react2['default'].PropTypes.any
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

    /**
     * We need to set the state here because we have selected something ( if we ever )
     */

    render: function render() {
        var params = this.getInputParams();
        var style = (0, _objectAssign2['default'])(params.style, this.props.style || {});
        return _react2['default'].createElement(
            'div',
            { className: 'rui-form-cont' },
            this.getLabel(),
            _react2['default'].createElement(
                'select',
                { style: style, disabled: this.props.readOnly, ref: this.inputRef, onChange: this.dispatchInputChange, className: 'rui-form-input ' + params.className },
                this.createOptions()
            )
        );
    }

});

exports['default'] = Select;
module.exports = exports['default'];