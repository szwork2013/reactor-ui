'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconTextSchemeMixin = require('./IconTextSchemeMixin');

var _IconTextSchemeMixin2 = _interopRequireDefault(_IconTextSchemeMixin);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var isActive = function isActive(props) {
    return props.selected.id === props.id && props.selected.group === props.group;
};

/**
 * The Single Nav Element
 */
var Nav = _react2['default'].createClass({
    displayName: 'Nav',

    propTypes: {

        id: _react2['default'].PropTypes.string.isRequired,
        text: _react2['default'].PropTypes.string.isRequired

    },

    mixins: [_IconTextSchemeMixin2['default'], _reactAddonsPureRenderMixin2['default']],

    getInitialState: function getInitialState() {
        return { active: isActive(this.props) };
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({ active: isActive(nextProps) });
    },

    itemClicked: function itemClicked() {

        if (this.props.onClick) {
            this.props.onClick(this.props.id);
        }
    },

    render: function render() {
        var classNames = (0, _classnames2['default'])("rui-snav-item", { "rui-snav-active": this.state.active });
        return _react2['default'].createElement(
            'div',
            { onClick: this.itemClicked, className: classNames },
            this.createIconTextContent()
        );
    }

});

module.exports = Nav;