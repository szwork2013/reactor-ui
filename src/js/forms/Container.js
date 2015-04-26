'use strict';

var React = require("react");
var ClonerMixin = require("./ClonerMixin");

var Col = React.createClass({
    mixins: [ClonerMixin],
    render : function() {

        var style = {};
        if ( this.props.width ) {
            style["width"] = this.props.width;
        }
        return (
            <div style={style} className="rui-form-container rui-form-column">
                {this.cloneChildren()}
            </div>
        );

    }

});

var BCont = React.createClass({
    mixins: [ClonerMixin],
    render : function() {

        return (
            <div className="rui-form-block" >
                {this.cloneChildren()}
            </div>
        );

    }
});

module.exports = {
    Col: Col,
    BCont : BCont
};