
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var PureRenderMixin = _react2['default'].addons.PureRenderMixin;

var View = _react2['default'].createClass({
    displayName: 'View',

    mixins: [PureRenderMixin],

    propTypes: {
        visible: _react2['default'].PropTypes.string,
        name: _react2['default'].PropTypes.string.isRequired,
        style: _react2['default'].PropTypes.object
    },
    render: function render() {

        var visible = this.props.visible;
        var name = this.props.name;

        if (visible === name || visible === undefined) {
            return _react2['default'].createElement(
                'div',
                { style: this.props.style || {} },
                this.props.children
            );
        }
        return _react2['default'].createElement('div', null);
    }

});

exports['default'] = View;
module.exports = exports['default'];