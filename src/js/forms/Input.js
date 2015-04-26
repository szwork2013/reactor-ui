'use strict';

var React = require('react');
var InputMixin = require("./InputMixin");
var LabelMixin = require("./LabelMixin");
var ValueChangeMixin = require("./ValueChangeMixin");

var Input = React.createClass({
    propTypes: {
        requiredName : React.PropTypes.string.isRequired
    },
    mixins: [InputMixin,LabelMixin,ValueChangeMixin],

    render : function() {
        var value= this.props.model[this.props.name] || "";
        return (
            <div>
                {this.getLabel()}
                <input value={value} onChange={this.dispatchInputChange} ref={this.inputRef} className="rui-form-input" placeholder={this.props.placeholder} {...this.props}/>
            </div>
        );
    }

});
        
module.exports = Input;