

var ValueChangeMixin = {


    dispatchInputChange : function() {
        var elNode = this.__input.getDOMNode();
        if ( this.hasContext() ) {
            if ( this._getContext().changeListener  ) {
                this._getContext().changeListener(this.props.name,elNode.value);
            }
        }
        if ( this.props.onInputChange ) {            
            this.props.onInputChange(this.props.name,elNode.value);
        }

    }

};

module.exports = ValueChangeMixin;
