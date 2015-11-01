"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var ClonerMixin = {

    cloneChildren: function cloneChildren() {
        var _this = this;

        return _react2["default"].Children.map(this.props.children, function (child) {
            return _react2["default"].cloneElement(child, { model: _this.props.model, changeListener: _this.props.changeListener });
        });
    }
};

module.exports = ClonerMixin;