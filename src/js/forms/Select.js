
/* jshint esnext: true, -W097 */


'use strict';

import React from "react";
import InputMixin from "./InputMixin";
import LabelMixin from "./LabelMixin";
import ValueChangeMixin from "./ValueChangeMixin";
import assign from 'object-assign';

var mapOption = function(option) {
    var obj = option, value, text;
    var selectionValueKey = this.props.valueKey || "value";
    var selectionTextKey = this.props.textKey || "text";
    var isSelection;
    var selected = this._getContext().model[this.props.name];

    if ( typeof obj === 'string' ) {
        value = obj;
        text = obj;
    } else {
        value = obj[selectionValueKey];
        text = obj[selectionTextKey];
    }
    if ( selected && selected === value ) {
        isSelection = true;
    } else {
        isSelection = false; //make sure to reset
    }

    return <option value={value} selected={isSelection}>{text}</option>;

};

var Select = React.createClass({
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

    _getOptions() {
        return this.props.selection || this.props.options || [];
    },

    createOptions : function() {

        var optional = this.props.optional === false ? this.props.optional : true;
        var optionalText = this.props.optionalText || "";
        var options = this._getOptions();

        var optionsEls =  options.map ( mapOption.bind(this) );
        if ( optional ) {
            optionsEls.unshift(<option value="">{optionalText}</option>);
        }

        return optionsEls;

    },

    /**
     * We need to set the state here because we have selected something ( if we ever )
     */


    render : function() {
        const params = this.getInputParams();
        const style = assign(params.style,this.props.style || {});
        return (
            <div className={"rui-form-cont"}>
                {this.getLabel()}
                <select style={style} readOnly={params.readOnly} ref={this.inputRef} onChange={this.dispatchInputChange} className={"rui-form-input " + params.className}>
                    {this.createOptions()}
                </select>
            </div>
        );
    }




});

export default Select;
