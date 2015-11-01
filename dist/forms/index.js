'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _AutoComplete = require('./AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var Form = _reactAddons2['default'].createClass({
    displayName: 'Form',

    childContextTypes: {
        model: _reactAddons2['default'].PropTypes.object.isRequired,
        changeListener: _reactAddons2['default'].PropTypes.any,
        inputRegistry: _reactAddons2['default'].PropTypes.any //so we can introspect coming
    },

    getChildContext: function getChildContext() {
        return { model: this.props.model, changeListener: this.dispatchChange, inputRegistry: this._inputRegistry };
    },

    /**
     * Register the input
     */
    _inputRegistry: function _inputRegistry(input) {},
    /**
     * Render a form
     */
    render: function render() {

        return _reactAddons2['default'].createElement(
            'div',
            null,
            _reactAddons2['default'].Children.map(this.props.children, function (child) {
                return _reactAddons2['default'].cloneElement(child, {});
            })
        );
    },

    dispatchChange: function dispatchChange(name, value) {

        if (this.props.changeListener) {
            this.props.changeListener(name, value);
        }
    }

});

var FormWrapper = _reactAddons2['default'].createClass({
    displayName: 'FormWrapper',

    render: function render() {
        return _reactAddons2['default'].createElement(
            Form,
            { model: this.props.model, changeListener: this.props.changeListener },
            this.props.children
        );
    }

});

exports.Forms = FormWrapper;
exports.Input = _Input2['default'];
exports.AutoComplete = _AutoComplete2['default'];
exports.Select = _Select2['default'];