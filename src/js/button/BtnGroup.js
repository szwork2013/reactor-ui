/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

var React = require("react");
var cn = require("classnames");
var Btn = require("./Btn");


var BtnGroup = React.createClass({

    getInitialState: function() {
        return {active : this.props.active};
    },

    processBtnGroup() {

        var activeValue = this.state.active;
        return React.Children.map(this.props.children, ( child ) => {
            return React.cloneElement(child,{scheme: this.props.scheme, active: this.state.active,onClick : this.buttonClicked});
        });

    },

    buttonClicked : function(event,value) {
        //TODO: pass to listener, then transition if all good.        
        this.setState({active : value});
    },

    render() {
        return (
            <div className="rui-btn-group">
                {this.processBtnGroup()}
            </div>
        );
    }

});

module.exports = BtnGroup;
