
/* jshint  -W097 */

'use strict';

var ValueChangeMixin = {

    dispatchInputChange: function dispatchInputChange() {
        var elNode = this.__input.getDOMNode();
        if (this.hasContext()) {
            if (this._getContext().changeListener) {
                this._getContext().changeListener(this.props.name, elNode.value);
            }
        }
        if (this.props.changeListener) {
            this.props.changeListener(this.props.name, elNode.value);
        }
    }

};

module.exports = ValueChangeMixin;