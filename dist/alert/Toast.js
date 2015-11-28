'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.toast = toast;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _baseStyle = require('../baseStyle');

var createElement = _react2['default'].createElement;
var cloneElement = _react2['default'].cloneElement;

var style = {
    base: {
        color: '#FFF',
        position: 'relative',
        transition: 'right 0.16s ease-in',
        padding: 16,
        width: 300,
        fontWeight: 400,
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

var Toast = (0, _radium2['default'])(_react2['default'].createClass({
    propTypes: {
        type: _react2['default'].PropTypes.oneOf([TYPES.success, TYPES.error, TYPES.warning, TYPES.info])
    },
    getInitialState: function getInitialState() {
        return { mounted: false };
    },
    getDefaultProps: function getDefaultProps() {
        return { type: TYPES.success, duration: 2000 };
    },
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.onComponentUnmounted) {
            this.props.onComponentUnmounted();
        }
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        setTimeout(function () {
            _this.setState({ mounted: true });
            if (_this.props.onComponentMounted) {
                _this.props.onComponentMounted((0, _reactDom.findDOMNode)(_this.refs.toastcontainer), _this);
            }
        }, 0);
    },

    render: function render() {
        var type = this.props.type;
        var rightStyle = this.state.mounted ? { right: 0 } : { right: -320 };
        return _react2['default'].createElement(
            'div',
            { style: [style.base, _baseStyle.styles[TYPES_TO_SCHEME[type]], rightStyle] },
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
        _style.right = '12px';
        _style.bottom = '12px';
        _style.overflow = 'visible';
        _style.zIndex = 9999999;
        document.body.appendChild(toastContainer);
    }
};

var onComponentMounted = function onComponentMounted(mountNode, el, toastInstance) {

    setTimeout(function () {
        toastInstance.setState({ mounted: false });
        if (el) {
            el.addEventListener('transitionend', function () {
                _react2['default'].unmountComponentAtNode(mountNode);
            });
        }
    }, toastInstance.props.duration);
};

var onComponentUnmounted = function onComponentUnmounted(mountNode) {
    setTimeout(function () {
        toastContainer.removeChild(mountNode);
    }, 0);
};

var createToastContainer = function createToastContainer() {
    var element = document.createElement('div');
    element.style.margin = '2px';
    return element;
};

function toast(toastElement) {
    createContainer();
    var toastContainerEl = createToastContainer();

    toastContainer.appendChild(toastContainerEl);
    (0, _reactDom.render)(cloneElement(toastElement, {
        onComponentUnmounted: onComponentUnmounted.bind(null, toastContainerEl),
        onComponentMounted: onComponentMounted.bind(null, toastContainerEl)
    }), toastContainerEl);
}

;

exports.Toast = Toast;
exports['default'] = Toast;