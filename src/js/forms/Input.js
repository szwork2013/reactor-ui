/* global module,require */
/* jshint esnext: true, -W097 */

'use strict';

var React = require('react');
var InputMixin = require("./InputMixin");
var LabelMixin = require("./LabelMixin");
var ValueChangeMixin = require("./ValueChangeMixin");

var Input = React.createClass({
    propTypes: {
        name : React.PropTypes.string.isRequired
    },
    mixins: [InputMixin,LabelMixin,ValueChangeMixin],

    render : function() {
        var value= this.props.model[this.props.name] || "";
        var readonly = null;
        if ( !this.props.readonly ) {//if falsy
            readonly = "";
        } else {
            readonly = "readonly";
        }
        return (
            <div>
                {this.getLabel()}
                <input value={value} readonly={readonly} onChange={this.dispatchInputChange} ref={this.inputRef} className="rui-form-input" placeholder={this.props.placeholder} {...this.props}/>
            </div>
        );
    }

});

module.exports = Input;
