
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Action = _react2['default'].createClass({
    displayName: 'Action',

    onClick: function onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.name);
        }
    },

    render: function render() {
        var classNames = (0, _classnames2['default'])('rui-portlet-tab-act', { 'rui-portlet-tab-act-active': this.props.active === this.props.name });

        return _react2['default'].createElement(
            'div',
            { className: classNames, onClick: this.onClick },
            this.props.text
        );
    }
});

var TabActionBar = _react2['default'].createClass({
    displayName: 'TabActionBar',

    getInitialState: function getInitialState() {
        return { active: this.props.active };
    },

    onClick: function onClick(name) {
        this.setState({ active: name });
        if (this.props.onTabActivated) {
            this.props.onTabActivated(name);
        }
    },

    render: function render() {
        var _this = this;

        return _react2['default'].createElement(
            'div',
            { style: this.props.style },
            _react2['default'].Children.map(this.props.children, function (child) {
                return _react2['default'].cloneElement(child, { onClick: _this.onClick, active: _this.state.active });
            })
        );
    }
});

TabActionBar.Action = Action;

exports['default'] = TabActionBar;
module.exports = exports['default'];