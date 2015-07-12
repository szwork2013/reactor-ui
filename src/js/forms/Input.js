/* jshint -W097 */

'use strict';

import React from 'react';
import assign from 'object-assign';

import InputMixin from './InputMixin';
import LabelMixin from './LabelMixin';
import ValueChangeMixin from './ValueChangeMixin';


const Input = React.createClass({
    getDefaultProps() {
        return {
            labelInline: false,
            showLabel: true
        };
    },
    propTypes: {
        name : React.PropTypes.string.isRequired,
        labelInline: React.PropTypes.bool,
        labelWidth : React.PropTypes.any,
        inputWidth : React.PropTypes.any,
    },

    mixins: [InputMixin,LabelMixin,ValueChangeMixin],

    contextTypes: {
        model: React.PropTypes.object,
        changeListener : React.PropTypes.any,
        inputRegistry: React.PropTypes.any
    },

    componentDidMount() {

        if ( this.hasContext() && this._getContext().inputRegistry ) {
            this._getContext().inputRegistry(this);
        }
    },

    render : function() {
        const value=  this.getInputValue(); //this._getContext().model[this.props.name] || "";
        const params = this.getInputParams();
        const style = assign(params.style,this.props.style || {});

        return (
            <div className={"rui-form-cont"}>
                {this.getLabel()}
                <input onKeyDown={this.props.onKeyDown} onKeyUp={this.props.onKeyUp} onKeyPress={this.props.onKeyPress}
                    style={style} value={value} readOnly={params.readOnly} onChange={this.dispatchInputChange}
                    ref={this.inputRef} className={"rui-form-input " + params.className} placeholder={this.props.placeholder} {...this.props}/>
            </div>
        );
    }

});

export default Input;
