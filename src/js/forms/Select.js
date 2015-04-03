
'use strict';

var React = require("react");
var InputMixin = require("./InputMixin");
var LabelMixin = require("./LabelMixin");
var ValueChangeMixin = require("./ValueChangeMixin");

var Select = React.createClass({
    propTypes: {
        name : React.PropTypes.string.isRequired
    },
    mixins: [InputMixin,LabelMixin,ValueChangeMixin],

    createOptions : function() {
        var selected = this.props.model[this.props.name];
        var optional = this.props.optional === false ? this.props.optional : true;
        var optionalText = this.props.optionalText || "";
        var options = this.props.selection || [];
        var isSelection;

        var optionsEls =  options.map ( option => {
            var obj = option, value, text;

            if ( typeof obj === 'string' ) {
                value = obj;
                text = obj;
            }
            if ( selected && selected === value ) {
                isSelection = true;
            } else {
                isSelection = false; //make sure to reset
            }

            return <option value={value} selected={isSelection}>{text}</option>



        });
        if ( optional ) {
            optionsEls.unshift(<option value="">{optionalText}</option>);
        }
        return optionsEls;

    },

    render : function() {


        return (
            <div>
                {this.getLabel()}
                <select ref={this.inputRef} onChange={this.dispatchInputChange} className="formx-input">
                {this.createOptions()}
                </select>
            </div>
        );
    }




});

module.exports = Select;