'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _baseStyle = require('../baseStyle');

var style = {
    base: {
        color: '#FFF',
        position: 'relative',
        zIndex: 99999,
        padding: 16,
        minWidth: 260,
        fontWeight: 700,
        textAlign: 'center'
    }
};

var TYPES = {
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info'
};

var TYPES_TO_SCHEME = {
    success: 'green',
    error: 'red',
    warning: 'orange',
    info: 'blue'
};

var Toaster = (0, _radium2['default'])(_react2['default'].createClass({

    propTypes: {
        type: _react2['default'].PropTypes.oneOf([TYPES.success, TYPES.error, TYPES.warning, TYPES.info]),
        duration: _react2['default'].PropTypes.number,
        onToastCompleted: _react2['default'].PropTypes.func
    },

    getDefaultProps: function getDefaultProps() {
        return { type: TYPES.success, duration: 2000 };
    },

    componentDidMount: function componentDidMount() {
        this.props.onComponentMounted((0, _reactDom.findDOMNode)(this.refs.toastcontainer));
    },
    getInitialState: function getInitialState() {
        return { visible: false, goneAnimationCompleted: false };
    },
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.onCompleted) {
            this.props.onCompleted();
        }
    },
    render: function render() {
        var type = this.props.type;
        return _react2['default'].createElement(
            'div',
            { ref: 'toastcontainer', style: [style.base, _baseStyle.styles[TYPES_TO_SCHEME[type]]] },
            this.props.children
        );
    }
}));

var toastContainer = undefined;

var createContainer = function createContainer() {
    if (!toastContainer) {
        toastContainer = document.createElement("div");
        var _toastContainer = toastContainer;
        var _style = _toastContainer.style;

        _style.position = 'fixed';
        _style.right = '10px';
        _style.bottom = '10px';
        _style.overflow = 'visible';
        document.body.appendChild(toastContainer);
        toastContainer.addEventListener('transitionend', function (e) {
            if (e.target["data-toasted"]) {
                (0, _reactDom.unmountComponentAtNode)(e.target);
            }
        });
    }
};
var Toast = _react2['default'].createClass({
    displayName: 'Toast',

    propTypes: {
        type: _react2['default'].PropTypes.oneOf([TYPES.success, TYPES.error, TYPES.warning, TYPES.info]),
        duration: _react2['default'].PropTypes.number,
        onToastCompleted: _react2['default'].PropTypes.func
    },
    getDefaultProps: function getDefaultProps() {
        return { type: TYPES.success, duration: 2000 };
    },

    componentDidMount: function componentDidMount() {
        createContainer();
        if (!this.__toastEl) {
            this.__toastEl = document.createElement('div');
            this.__toastEl.style.position = 'absolute';
            this.__toastEl.style.right = '-260px';
            this.__toastEl.style.width = '260px';
            this.__toastEl.style.transition = 'right 0.16s ease-in';
            this.__toastEl.style.bottom = '12px';
            toastContainer.appendChild(this.__toastEl);
        }
        this.componentDidUpdate();
    },
    componentWillUnmount: function componentWillUnmount() {
        (0, _reactDom.unmountComponentAtNode)(this.__toastEl);
        toastContainer.removeChild(this.__toastEl);
    },
    onComponentMounted: function onComponentMounted() {
        var _this = this;

        setTimeout(function () {
            _this.__toastEl.style.right = "0px";

            setTimeout(function () {
                _this.__toastEl.style.right = "-280px";
                _this.__toastEl["data-toasted"] = 1;
            }, _this.props.duration);
        }, 0);
    },
    componentDidUpdate: function componentDidUpdate() {
        (0, _reactDom.render)(_react2['default'].createElement(
            Toaster,
            _extends({}, this.props, { onComponentMounted: this.onComponentMounted }),
            this.props.children
        ), this.__toastEl);
    },
    render: function render() {
        return _react2['default'].DOM.noscript();
    }

});

exports['default'] = Toast;
module.exports = exports['default'];