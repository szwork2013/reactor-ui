/* global module */
/* jshint esnext: true, -W097 */

'use strict';

import React from 'react';


import InputMixin from './InputMixin';
import LabelMixin from './LabelMixin';
import ValueChangeMixin from './ValueChangeMixin';



const Input = React.createClass({
    propTypes: {
        name : React.PropTypes.string.isRequired,
        labelInline: React.PropTypes.boolean,
        labelWidth : React.PropTypes.any,
        inputWidth : React.PropTypes.any,
    },

    mixins: [InputMixin,LabelMixin,ValueChangeMixin],

    contextTypes: {
        model: React.PropTypes.object.isRequired,
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

        return (
            <div className={"rui-form-cont"}>
                {this.getLabel()}
                <input style={params.style} value={value} readOnly={params.readOnly} onChange={this.dispatchInputChange}
                    ref={this.inputRef} className={"rui-form-input " + params.className} placeholder={this.props.placeholder} {...this.props}/>
            </div>
        );
    }

});

module.exports = Input;
