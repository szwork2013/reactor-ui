'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Btn = require('./Btn');

var _Btn2 = _interopRequireDefault(_Btn);

var PureRenderMixin = _reactAddons2['default'].addons.PureRenderMixin;

var BtnGroup = _reactAddons2['default'].createClass({
    displayName: 'BtnGroup',

    mixins: [PureRenderMixin],

    propTypes: {
        scheme: _reactAddons2['default'].PropTypes.string,
        active: _reactAddons2['default'].PropTypes.string
    },

    getInitialState: function getInitialState() {
        return { active: this.props.active };
    },

    processBtnGroup: function processBtnGroup() {
        var _this = this;

        return _reactAddons2['default'].Children.map(this.props.children, function (child) {

            if (child.type !== _Btn2['default']) {
                throw new Error('Only Btn type is allowed');
            }
            return _reactAddons2['default'].cloneElement(child, { style: { marginLeft: 1 }, disabled: _this.props.disabled, scheme: _this.props.scheme, active: _this.state.active, onClick: _this.buttonClicked });
        });
    },

    buttonClicked: function buttonClicked(event, value) {
        if (this.props.onClick) {
            this.props.onClick(value);
        }
        this.setState({ active: value });
    },

    render: function render() {
        return _reactAddons2['default'].createElement(
            'div',
            { style: { display: 'inline-block' } },
            this.processBtnGroup()
        );
    }

});

exports['default'] = BtnGroup;
module.exports = exports['default'];