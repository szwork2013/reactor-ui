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

var _baseStyle2 = _interopRequireDefault(_baseStyle);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var baseStyleSheet = _baseStyle2['default'];
var PureRenderMixin = _reactAddons2['default'].addons.PureRenderMixin;

var Btn = (0, _radium2['default'])(_reactAddons2['default'].createClass({

    mixins: [PureRenderMixin],

    propTypes: {
        /** theme */
        scheme: _reactAddons2['default'].PropTypes.string,
        text: _reactAddons2['default'].PropTypes.string,
        /** the value assigned to this button, used by button groups */
        value: _reactAddons2['default'].PropTypes.string,
        /** if active === value then then it will be activated via a css */
        active: _reactAddons2['default'].PropTypes.string,
        disabled: _reactAddons2['default'].PropTypes.bool

    },

    getInitialState: function getInitialState() {
        return { hovered: false };
    },

    createText: function createText() {
        if (this.props.text) {
            return this.props.text;
        }
        return null;
    },

    createIcon: function createIcon() {
        if (this.props.iconCls) {
            return _reactAddons2['default'].createElement('span', { className: this.props.iconCls });
        }
        return null;
    },

    __onClickHandler: function __onClickHandler(e) {
        if (this.props.onClick) {
            this.props.onClick(e, this.props.value);
        }
    },

    onMouseOver: function onMouseOver() {
        this.setState({ hovered: true });
    },
    onMouseOut: function onMouseOut() {
        this.setState({ hovered: false });
    },
    createContent: function createContent() {
        var contentEls = [],
            icon,
            text;

        if (_reactAddons2['default'].Children.count(this.props.children) === 0) {
            icon = this.createIcon();
            text = this.createText();
            if (icon) {
                contentEls.push(icon);
            }
            if (text) {
                contentEls.push(text);
            }
            return contentEls;
        } else {
            return this.props.children;
        }
    },

    getUserStyles: function getUserStyles() {
        var props = this.props;
        return props.styles || {};
    },
    createStyles: function createStyles() {
        var scheme = this.props.scheme || '';
        var userStyles = this.getUserStyles();

        return [_style2['default'].Btn, baseStyleSheet[scheme], _style2['default'][scheme], this.props.style, this.state.hovered ? _style2['default'][scheme + 'Hovered'] : {}, this.props.disabled ? _style2['default'].BtnDisabled : {}, this.props.value === this.props.active && this.props.value !== undefined ? _style2['default'][scheme + 'Active'] : {}].concat(userStyles);
    },
    render: function render() {

        var styles = this.createStyles();

        return _reactAddons2['default'].createElement(
            'button',
            { ref: 'btn', style: styles,
                onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut,
                onBlur: this.props.onBlur, value: this.props.value,
                disabled: this.props.disabled === true, onClick: this.__onClickHandler },
            this.createContent()
        );
    }
}));

exports['default'] = Btn;
module.exports = exports['default'];