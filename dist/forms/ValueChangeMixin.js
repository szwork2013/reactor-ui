"use strict";

var ValueChangeMixin = {

    dispatchInputChange: function dispatchInputChange() {
        var elNode = this.__input;
        if (this.hasContext()) {
            if (this._getContext().changeListener) {
                this._getContext().changeListener(this.props.name, elNode.value);
            }
        }
        if (this.props.onInputChange) {
            this.props.onInputChange(this.props.name, elNode.value);
        }
    }

};

module.exports = ValueChangeMixin;