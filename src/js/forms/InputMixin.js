
/* jshint esnext: true, -W097 */

'use strict';

var InputMixin = {


    getType : function() {
        return this.props.type || 'text';
    },

    //we are in deep shit
    _getContext() {
        return this._reactInternalInstance._context;
    },

    getInputParams() {
        var readOnly = null;
        var className = "rui-input-block";
        var inputWidth = this.props.inputWidth || "100%";
        var style = { width: inputWidth };

        if ( !this.props.readOnly ) {//if falsy
            readOnly = "";
        } else {
            readOnly = "readonly";
        }
        if ( this.props.labelInline && this.props.showLabel ) {
            className = "rui-input-inline";
        }

        return {className,style,readOnly};
    },
    hasContext() {
        return this._reactInternalInstance && this._reactInternalInstance._context;
    },

    getInputValue() {
        var context ;

        if ( this.hasContext()   ) {
            context = this._getContext();
            if ( context.model ) {
                return context.model[this.props.name];
            }
        }
        return this.props.value;
    },
    inputRef : function(el) {

        this.__input = el;
        if ( this.__input ) {
            this.__input.getDOMNode().focus();
        }
    }

};

export default InputMixin;
