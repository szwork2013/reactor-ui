/* global module,require */
/* jshint esnext: true, -W097 */


'use strict';

import React from "react";
import InputMixin from "./InputMixin";
import LabelMixin from "./LabelMixin";
import ValueChangeMixin from "./ValueChangeMixin";


var Select = React.createClass({
    propTypes: {
        name : React.PropTypes.string.isRequired
    },
    mixins: [InputMixin,LabelMixin,ValueChangeMixin],

    contextTypes: {
        model: React.PropTypes.object.isRequired,
        changeListener : React.PropTypes.any,
        inputRegistry: React.PropTypes.any
    },

    createOptions : function() {
        var selected = this._getContext().model[this.props.name];
        var optional = this.props.optional === false ? this.props.optional : true;
        var optionalText = this.props.optionalText || "";
        var options = this.props.selection || this.props.options || [];
        var isSelection;

        var optionsEls =  options.map ( option => {

            var obj = option, value, text;

            if ( typeof obj === 'string' ) {
                value = obj;
                text = obj;
            } else {
                value = obj.value;
                text = obj.text;
            }
            if ( selected && selected === value ) {
                isSelection = true;
            } else {
                isSelection = false; //make sure to reset
            }

            return <option value={value} selected={isSelection}>{text}</option>;


        });
        if ( optional ) {
            optionsEls.unshift(<option value="">{optionalText}</option>);
        }

        return optionsEls;

    },

    /**
     * We need to set the state here because we have selected something ( if we ever )
     */
    

    render : function() {


        return (
            <div className={"rui-form-cont"}>
                {this.getLabel()}
                <select ref={this.inputRef} onChange={this.dispatchInputChange} className="rui-form-input">
                    {this.createOptions()}
                </select>
            </div>
        );
    }




});

module.exports = Select;
