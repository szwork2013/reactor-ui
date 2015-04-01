/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

var React = require("react");

var getVisibleId = function(children) {
    if ( React.Children.count(children) === 1 ) {
        return children.props.id;
    } else if ( React.Children.count(children) > 1 ) {
        return children[0].props.id;
    }
    return null;
};

var TabSet = React.createClass({

    getInitialState() {
        var child1 = getVisibleId(this.props.children);
        return { visible : child1 };
    },

    onTabControlClick(id) {

        this.setState({visible: id});

    },
    createTabControls() {
        var tabs = this.props.children;
        var controlType = this.props.controlStyle || "classic";
        var controlTypeClss = "rui-tabset-ctrl-" + controlType;
        return React.Children.map(tabs, ( tab => {
            var className = "rui-tabset-ctrl " + controlTypeClss + " ";
            if ( this.state.visible === tab.props.id ) {
                className = className + controlTypeClss+"-active rui-tab-active";
            } else {
                className = className + controlTypeClss+"-inactive  rui-tab-inactive";
            }
            return <div className={className} onClick={this.onTabControlClick.bind(null,tab.props.id)}>{tab.props.text}</div>;
        }));
    },


    createChildrenTabs() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement( child, { visible: child.props.id === this.state.visible } );
        });
    },
    render() {
        var tabControls = this.createTabControls();

        return (
            <div className={"rui-tabset-c"}>
                <div className={"rui-tabset"} style={ {display: "flex", flexFlow: "row"}}>
                    { tabControls }
                </div>
                {this.createChildrenTabs()}
            </div>
        );
    }

});

module.exports = TabSet;
