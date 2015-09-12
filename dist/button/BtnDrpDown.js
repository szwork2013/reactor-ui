'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Btn = require('./Btn');

var _Btn2 = _interopRequireDefault(_Btn);

var _menuList = require('../menu/List');

var _menuList2 = _interopRequireDefault(_menuList);

var PureRenderMixin = _reactAddons2['default'].addons.PureRenderMixin;

var BtnDropDown = _reactAddons2['default'].createClass({
    displayName: 'BtnDropDown',

    mixins: [PureRenderMixin],

    getInitialState: function getInitialState() {
        return { listVisible: false };
    },

    createItems: function createItems() {
        if (this.state.listVisible) {
            if (this.props.items) {
                return _reactAddons2['default'].createElement(_menuList2['default'], _extends({ onClick: this.onItemClick }, this.props, { minWidth: this.state.listMinWidth }));
            } else {
                //FIXME, we should listener here
                return this.props.children;
            }
        } else {
            return null;
        }
    },

    onItemLick: function onItemLick() {
        if (this.props.onClick) {
            this.props.onClick.apply(null, arguments);
        }
    },

    onBlur: function onBlur() {
        this.setState({ listVisible: !this.state.listVisible });
    },
    buttonClicked: function buttonClicked() {
        var element = this.refs.btn.getDOMNode();
        var width = element.offsetWidth;
        this.setState({ listVisible: !this.state.listVisible, listMinWidth: width + 'px' });
    },

    render: function render() {
        var defaultText = this.props.defaultText;

        var classNames = (0, _classnames2['default'])('rui-btn-drpdown', { 'rui-btn-drpdown-green': 'green' === this.props.scheme });

        return _reactAddons2['default'].createElement(
            'div',
            { className: classNames },
            _reactAddons2['default'].createElement(
                _Btn2['default'],
                { scheme: this.props.scheme, ref: 'btn', onBlur: this.onBlur, disabled: this.props.disabled, onClick: this.buttonClicked },
                defaultText,
                ' ',
                _reactAddons2['default'].createElement('span', { className: 'fa fa-chevron-down' })
            ),
            this.createItems()
        );
    }
});

module.exports = BtnDropDown;