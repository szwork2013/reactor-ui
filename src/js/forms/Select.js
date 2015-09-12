
import React from 'react';
import radium from 'radium';


import InputMixin from "./InputMixin";
import LabelMixin from "./LabelMixin";
import ValueChangeMixin from "./ValueChangeMixin";
import defaultProps from './defaultProps';
import style from './style';

const mapOption = function(option) {
    var obj = option, value, text;
    var selectionValueKey = this.props.valueKey || "value";
    var selectionTextKey = this.props.textKey || "text";
    var isSelection;
    var selected =  null;
    if ( this._getContext().model ) {
        selected =  this._getContext().model[this.props.name];
    } else if ( this.props.model ) {
        selected = this.props.model[this.props.name];
    } else {
        selected = this.props.selected;
    }

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

const Select = radium(React.createClass({
    propTypes: {
        selected: React.PropTypes.string,
        name : React.PropTypes.string.isRequired,
        labelInline: React.PropTypes.bool,
        labelWidth : React.PropTypes.any,
        inputWidth : React.PropTypes.any,
        onChange: React.PropTypes.func,
        model: React.PropTypes.object
    },
    getDefaultProps() {
        return defaultProps.input;
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

    render : function() {
        // const params = this.getInputParams();
        const styleArr = [style.inputStyle];

        if ( this.props.labelInline === true ) {
            styleArr.push(style.inputStyleInline);
            styleArr.push({width: this.props.inputWidth});
        } else {
            styleArr.push(style.inputStyleBlock);
        }

        return (
            <div >
                {this.getLabel()}
                <select style={styleArr} disabled={this.props.readOnly} ref={this.inputRef} onChange={this.dispatchInputChange} >
                    {this.createOptions()}
                </select>
            </div>
        );
    }




}));

export default Select;
