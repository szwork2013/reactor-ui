'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _stringUtil = require('./stringUtil');

var _stringUtil2 = _interopRequireDefault(_stringUtil);

var LabelMixin = {

    getLabel: function getLabel() {
        var labelText = _stringUtil2['default'].createLabel(this.props.label || this.props.name);
        var styles = [_style2['default'].labelStyle];

        if (this.props.labelInline === true) {
            styles.push(_style2['default'].inputStyleInline);
            styles.push({ width: this.props.labelWidth });
        } else {
            styles.push(_style2['default'].inputStyleBlock);
        }

        if (this.props.showLabel === false) {
            styles.push({ display: 'none' });
        }

        return _react2['default'].createElement(
            'label',
            { style: styles },
            labelText
        );

        // var labelText = this.props.label || this.props.name;
        // var labelWidth = this.props.labelWidth || "100%";
        // var labelStyle = { width: labelWidth};
        // var showLabel = true;
        // if ( this.props.showLabel !== undefined ) {
        //     showLabel = this.props.showLabel;
        // }
        //
        // if ( hasLabel ) {
        //     labelText = labelText.substring(0,1).toUpperCase() + labelText.substring(1);
        // }
        // if ( showLabel ) {
        //     return <label style={labelStyle} >{labelText}</label>;
        // }
        // return null;
    }

};

module.exports = LabelMixin;