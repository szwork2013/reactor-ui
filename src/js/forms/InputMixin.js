

const focusAndSelect = (inputEl) => {
    if ( inputEl ) {
        inputEl.focus();
        //inputEl.select();
    }
};


const InputMixin = {


    getType : function() {
        return this.props.type || 'text';
    },

    //we are in deep shit
    _getContext() {
        return this._reactInternalInstance._context;
    },

    shouldComponentUpdate() {
        return true;
    },

    getInputParams() {
        var readOnly = null;
        var className = 'rui-input-block';
        var inputWidth = this.props.inputWidth || '100%';

        var style = { width: inputWidth };

        if ( !this.props.readOnly ) {//if falsy
            readOnly = '';
        } else {
            readOnly = 'readonly';
        }
        if ( this.props.labelInline  ) {
            className = 'rui-input-inline';
        }

        return {className,style,readOnly};
    },
    //FIXME: this is buggy, always seems to be true
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
        focusAndSelect(this.__input);
    },



    componentDidUpdate() {
        focusAndSelect(this.__input);
    }

};

export default InputMixin;
