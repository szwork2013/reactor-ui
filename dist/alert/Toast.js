'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _baseStyle = require('../baseStyle');

var style = {
    base: {
        color: '#FFF',
        position: 'fixed',
        zIndex: 99999,
        right: '-220px',
        bottom: '12px',
        padding: 16,
        minWidth: 220,
        transition: 'right 0.16s ease-in',
        fontWeight: 700,
        textAlign: 'center'
    },
    baseVisible: {
        right: '12px'
    },
    baseHidden: {
        right: '-220px'
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

var WAITFOR_TIMEOUT = 500;

var Toast = (0, _radium2['default'])(_reactAddons2['default'].createClass({

    propTypes: {
        type: _reactAddons2['default'].PropTypes.oneOf([TYPES.success, TYPES.error, TYPES.warning, TYPES.info]),
        duration: _reactAddons2['default'].PropTypes.number,
        onToastCompleted: _reactAddons2['default'].PropTypes.func
    },

    getDefaultProps: function getDefaultProps() {
        return { type: TYPES.success, duration: 2000 };
    },
    componentDidUpdate: function componentDidUpdate() {
        var _this = this;

        if (this.state.visible === false && this.state.goneAnimationCompleted === true) {
            if (this.props.onToastCompleted) {
                this.props.onToastCompleted();
            }
        }
        //wait till animation to show is completed
        setTimeout(function () {
            _this.setState({ goneAnimationCompleted: true });
        }, this.props.duration + WAITFOR_TIMEOUT);
    },
    componentDidMount: function componentDidMount() {
        var _this2 = this;

        this._toastEl = _reactAddons2['default'].findDOMNode(this.refs.toastcontainer);
        this._toastEl.addEventListener('transitionend', this.transitionEnd);
        setTimeout(function () {
            _this2.setState({ visible: true });
        }, 0);
        setTimeout(function () {
            _this2.setState({ visible: false });
        }, this.props.duration);
    },
    getInitialState: function getInitialState() {
        return { visible: false, goneAnimationCompleted: false };
    },

    render: function render() {
        var type = this.props.type;
        return _reactAddons2['default'].createElement(
            'div',
            { ref: 'toastcontainer', style: [style.base, _baseStyle.styles[TYPES_TO_SCHEME[type]], this.state.visible ? style.baseVisible : style.baseHidden] },
            this.props.children
        );
    }
}));

exports['default'] = Toast;
module.exports = exports['default'];