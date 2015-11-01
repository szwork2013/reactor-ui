'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputMixin = require('./InputMixin');

var _InputMixin2 = _interopRequireDefault(_InputMixin);

var _LabelMixin = require('./LabelMixin');

var _LabelMixin2 = _interopRequireDefault(_LabelMixin);

var _ValueChangeMixin = require('./ValueChangeMixin');

var _ValueChangeMixin2 = _interopRequireDefault(_ValueChangeMixin);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

/** FIXME: wait for .14 and fix context handling */
var Input = (0, _radium2['default'])(_react2['default'].createClass({
    getDefaultProps: function getDefaultProps() {
        return _defaultProps2['default'].input;
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
        var value = this.getInputValue();
        var params = this.getInputParams();
        var styleArr = [_style2['default'].inputStyle];

        if (this.props.labelInline === true) {
            styleArr.push(_style2['default'].inputStyleInline);
            styleArr.push({ width: this.props.inputWidth });
        } else {
            styleArr.push(_style2['default'].inputStyleBlock);
        }

        return _react2['default'].createElement(
            'div',
            { style: [_style2['default'].containerStyle] },
            this.getLabel(),
            _react2['default'].createElement('input', _extends({ onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp, onKeyPress: this.props.onKeyPress,
                style: styleArr, value: value, readOnly: params.readOnly, onChange: this.dispatchInputChange, onBlur: this.dispatchInputChange,
                ref: this.inputRef, placeholder: this.props.placeholder }, this.props))
        );
    }

}));

exports['default'] = Input;
module.exports = exports['default'];