
'use strict';


var React = require("react");


var createToolboxActions = function(props) {
    var toolboxDefs =props.toolbox || [];

    return toolboxDefs.map( (toolbox)  => {
        return (<a key={toolbox["data-action-name"]}><i {...toolbox}></i></a>);
    });
};

var Header = React.createClass({

    subtitle() {
        if ( this.props.subtitle ) {
            return <span className="rui-portlet-subtitle">{this.props.subtitle}</span>;
        }
    },

    render : function() {
        var icon = null;
        if ( this.props.titleIcon ) {
            icon = (<i className={"rui-portlet-title-icon " + this.props.titleIcon} />);
        }

        var toolbox = null;
        if ( this.props.toolbox ) {
            toolbox = this.props.toolbox;
        }
        return (<div className="rui-portlet-header">
            <div className="rui-portlet-title-cont">
                {icon}
                <span className="rui-portlet-title">{this.props.title}</span>
                {this.subtitle()}
            </div>
            <div className="rui-portlet-toolbox">
                {createToolboxActions(this.props)}
            </div>
        </div>);
    }
});


var Body = React.createClass({



    render : function() {

        var reactEl = this.props.contentEl || this.props.children;
        var htmlStr = this.props.contentStr;

        var content = null;

        if ( reactEl && reactEl.length > 0  && (htmlStr !== undefined) ) {
            content =  (<span>{"You can't have children and htmlStr as body at the same time."}</span>);
        } else if ( htmlStr !== undefined  ) {
            content = <div ref="el" dangerouslySetInnerHTML={{__html: htmlStr}} />;
        } else if (  reactEl  ) {
            content = reactEl;
        } else {
            content = <div ref={"el"}></div>;
        }

        return (<div style={this.props.style} className="rui-portlet-body">
            {content}
        </div>);
    }
});


var Portlet = React.createClass({

    _clickListener : function(e) {
        if ( this.props.clickListener ) {
            this.props.clickListener(e);
        }
    },
    componentWillUnmount : function() {
        //this.state.delegate.destroy();
        this.getDOMNode().removeEventListener("click",this._clickListener);
    },

    componentDidMount : function() {
        //this.setState({delegate :new  Delegate(this.getDOMNode())});
        this.getDOMNode().addEventListener("click",this._clickListener);
    },

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
