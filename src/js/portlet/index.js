
'use strict';


var React = require("react");

import ActionBar from '../ActionBar';

var createToolboxActions = function(props) {
    var toolboxDefs =props.toolbox || [];

    return toolboxDefs.map( (toolbox)  => {
        return (<a key={toolbox["data-action-name"]}><i {...toolbox}></i></a>);
    });
};

const findActionBar = function(props) {

    let actionBar;
    React.Children.forEach ( props.children, ( child ) => {
        if ( child.type === ActionBar ) {
            actionBar= child;
        }
    });
    return actionBar;

};

var Header = React.createClass({

    subtitle() {
        if ( this.props.subtitle ) {
            return <span className="rui-portlet-subtitle">{this.props.subtitle}</span>;
        }
    },

    render : function() {
        var icon = null;
        var actionBar = findActionBar(this.props);
        var style = {};
        if ( actionBar ) {
            style.lineHeight = "28px";
        }
        if ( this.props.titleIcon ) {
            icon = (<i className={"rui-portlet-title-icon " + this.props.titleIcon} />);
        }

        var toolbox = null;
        if ( this.props.toolbox ) {
            toolbox = this.props.toolbox;
        }
        return (<div className="rui-portlet-header">
            <div  style={style}  className="rui-portlet-title-cont">
                {icon}
                <span className="rui-portlet-title">{this.props.title}</span>
                {this.subtitle()}
            </div>
            <div className="rui-portlet-toolbox">
                {findActionBar(this.props)}
                {createToolboxActions(this.props)}
            </div>
        </div>);
    }
});


var Body = React.createClass({



    render : function() {

        var content = React.Children.map(this.props.children, child => {
            if ( child.type === ActionBar ) {
                return null;
            }
            return child;
        });


        return (<div style={this.props.style} className="rui-portlet-body">
            {content}
        </div>);
    }
});


var Portlet = React.createClass({



    render : function() {

        return (
            <div className="rui-portlet-container">
                <Header {...this.props}  />
                <Body {...this.props} ref={"body"}>
                </Body>
            </div>
        );
    },

    bodyEl : function() {
        return this.refs.body.refs.el.getDOMNode();
    },

    on : function(eventType, selector, handler, useCapture) {
        this.state.delegate.on(eventType,selector,handler,useCapture);
    },


    off :  function(eventType, selector, handler, useCapture) {
        this.state.delegate.off(eventType,selector,handler,useCapture);
    },


    el : function(selector) {

        var bodyEl = this.bodyEl();

        if ( bodyEl) {
            return bodyEl.querySelector(selector);
        }

    }

});


module.exports = Portlet;
