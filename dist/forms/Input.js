/* jshint -W097 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _InputMixin = require('./InputMixin');

var _InputMixin2 = _interopRequireDefault(_InputMixin);

var _LabelMixin = require('./LabelMixin');

var _LabelMixin2 = _interopRequireDefault(_LabelMixin);

var _ValueChangeMixin = require('./ValueChangeMixin');

var _ValueChangeMixin2 = _interopRequireDefault(_ValueChangeMixin);

var Input = _react2['default'].createClass({
    displayName: 'Input',

    getDefaultProps: function getDefaultProps() {
        return {
            labelInline: false,
            showLabel: true
        };
    },
    propTypes: {
        name: _react2['default'].PropTypes.string.isRequired,
        labelInline: _react2['default'].PropTypes.bool,
        labelWidth: _react2['default'].PropTypes.any,
        inputWidth: _react2['default'].PropTypes.any
    },

    mixins: [_InputMixin2['default'], _LabelMixin2['default'], _ValueChangeMixin2['default']],

    contextTypes: {
        model: _react2['default'].PropTypes.object,
        changeListener: _react2['default'].PropTypes.any,
        inputRegistry: _react2['default'].PropTypes.any
    },

    componentDidMount: function componentDidMount() {

        if (this.hasContext() && this._getContext().inputRegistry) {
            this._getContext().inputRegistry(this);
        }
    },

    render: function render() {
        var value = this.getInputValue(); //this._getContext().model[this.props.name] || "";
        var params = this.getInputParams();
        var style = (0, _objectAssign2['default'])(params.style, this.props.style || {});

        return _react2['default'].createElement(
            'div',
            { className: 'rui-form-cont' },
            this.getLabel(),
            _react2['default'].createElement('input', _extends({ onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp, onKeyPress: this.props.onKeyPress,
                style: style, value: value, readOnly: params.readOnly, onChange: this.dispatchInputChange,
                ref: this.inputRef, className: 'rui-form-input ' + params.className, placeholder: this.props.placeholder }, this.props))
        );
    }

});

exports['default'] = Input;
module.exports = exports['default'];