'use strict';

var React = require('react');
var InputMixin = require("./InputMixin");
var LabelMixin = require("./LabelMixin");
var ValueChangeMixin = require("./ValueChangeMixin");

var AutoComplete = React.createClass({

    propTypes: {
        requiredName : React.PropTypes.string.isRequired
    },
    mixins: [InputMixin,LabelMixin],

    getInitialState : function() {
        return { inputActive: false , hasValue :  this.getValue() ? true : false, hasPlaceholder: this.props.placeholder ? true : false };
    },

    renderValue : function() {
        var value = this.getValue();
        return null;

    },

    getValue : function() {
        return this.props.model[this.props.name] || "";
    },

    containerClick :function() {

    },

    acInputChange : function() {



    },

    renderInput : function() {
        if ( !this.state.hasValue && this.state.hasPlaceholder ) {
            return <input onChange={this.acInputChange} placeholder={this.props.placeholder} type="text" autocomplete="off" style={ { width: "100%" ,position: "relative", left: "0px", tabindex: "tabindex"}}   />
        }
    },
    render : function() {

        var inputActive = false;
        return (
            <div>
                {this.getLabel()}
                <div className="rui-form-ac-cont rui-form-input" onClick={this.containerClick}>
                    <div>{this.renderValue()}</div>
                    {this.renderInput()}
                </div>
                <input style={ {position: "relative", left:"-20000px"}} value={this.getValue()} onChange={this.dispatchInputChange} ref={this.inputRef}/>
            </div>
        );
    }

});

module.exports = AutoComplete;