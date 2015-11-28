'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var Modal = _react2['default'].createClass({
    displayName: 'Modal',

    componentDidMount: function componentDidMount() {
        var p = this.props.portalId && document.getElementById(this.props.portalId);
        if (!p) {
            var p = document.createElement('div');
            p.id = this.props.portalId;
            document.body.appendChild(p);
        }
        this.portalElement = p;
        this.componentDidUpdate();
    },

    componentWillUnmount: function componentWillUnmount() {},

    render: function render() {
        return null;
    }
});