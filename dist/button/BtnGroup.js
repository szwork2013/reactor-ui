
'use strict';

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
        /** theme */
        scheme: _reactAddons2['default'].PropTypes.string,
        /** text of the  button */
        active: _reactAddons2['default'].PropTypes.string
        /** if this button group is disabled */

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
            return _reactAddons2['default'].cloneElement(child, { style: { marginLeft: 2 }, disabled: _this.props.disabled, scheme: _this.props.scheme, active: _this.state.active, onClick: _this.buttonClicked });
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
            { className: 'rui-btn-group' },
            this.processBtnGroup()
        );
    }

});

module.exports = BtnGroup;