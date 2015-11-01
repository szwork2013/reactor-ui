'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * A helper on window resize events
 *
 */
var ViewportResizeMixin = {

    componentDidMount: function componentDidMount() {
        window.addEventListener('resize', this._viewport_handleResize);
    },

    componentWillUnmount: function componentWillUnmount() {
        window.removeEventListener('resize', this._viewport_handleResize);
    },

    _viewport_getDimension: function _viewport_getDimension() {
        return {
            width: window.innerWidth - (this.props.offsetWidth || 0),
            height: window.innerHeight - (this.props.offsetHeight || 0)
        };
    },
    _viewport_handleResize: function _viewport_handleResize() {
        this.setState(this._viewport_getDimension());
    }

};

module.exports = ViewportResizeMixin;