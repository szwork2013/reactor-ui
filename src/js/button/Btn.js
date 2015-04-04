/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

var React = require("react");
var cn = require("classnames");

var Btn = React.createClass({


    createText : function() {
        if ( this.props.text ) {
            return this.props.text;
        }
        return null;
    },

    createIcon : function() {
        if ( this.props.iconCls ) {
            return (<span className={this.props.iconCls}></span>);
        }
        return null;
    },
    shouldComponentUpdate(nextProps) {
        return nextProps.active !== this.props.value ||
            this.props.active !==nextProps.value;

    },
    __onClickHandler : function(e) {
        if ( this.props.onClick ) {
            this.props.onClick(e,this.props.value);
        }
    },
    render: function() {
        var disabled = ( this.props.disabled === true );
        var text = this.props.text;
        var scheme = this.props.scheme;
        var active = this.props.active;
        var classNames =  cn(
            "rui-btn",
            {"rui-btn-green" : (scheme === "green") },
            {"rui-btn-blue" : (scheme === "blue") },
            {"rui-btn-violet" : (scheme === "violet") },
            {"rui-btn-red" : (scheme === "red") },
            {"rui-btn-orange" : (scheme === "orange") },
            {"rui-btn-group-active-violet" : this.props.value === active }
        );
        return (<button value={this.props.value} className={classNames} disabled={disabled} onClick={this.__onClickHandler}>{this.createIcon()} {this.createText()}</button>);
    }
});

module.exports = Btn;
