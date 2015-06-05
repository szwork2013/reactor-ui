/* global module,require */
/* jshint esnext:true, -W097, maxstatements:15, maxdepth:2, maxcomplexity:5 */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var ValueChangeMixin = {

    dispatchInputChange: function dispatchInputChange() {

        this._getContext().changeListener();
        if (this._getContext().changeListener) {
            var elNode = this.__input.getDOMNode();
            this._getContext().changeListener(this.props.name, elNode.value);
        }
    }

};

module.exports = ValueChangeMixin;