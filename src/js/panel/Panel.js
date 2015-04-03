/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

var React = require("react");

var cs = require("classnames");

var Panel = React.createClass({

    getInitialState() {
        return { bodyShown: true };
    },

    collapseClicked() {
        this.setState( { bodyShown : !this.state.bodyShown });

    },

    closeComponent() {

        if ( this.props.closeable === true ) {
            return <span className="rui-panel-control rui-panel-close fa fa-close"></span>
        }
        return null;
    },

    collapseComponent() {
        if ( this.props.collapsable === true ) {
            return <span onClick={this.collapseClicked} className={cs("rui-panel-control","rui-panel-collapsable","fa",
                { "fa-chevron-up" : this.state.bodyShown }, {"fa-chevron-down": !this.state.bodyShown})}></span>
        }
        return null;
    },

    headerRhsComponent() {
        var closeComponent = this.closeComponent();
        var collapseComponent = this.collapseComponent();

        if ( closeComponent || collapseComponent ) {
            return <div className="rui-panel-controls">{collapseComponent} {closeComponent}</div>
        }
    },
    render() {
        var style = {};
        var hideOnClose = this.props.hideOnClose; //by default its destroy

        if ( this.state.bodyShown === false ) {
            style["display"] = "none";
        }
        if ( this.props.maxHeight ) {
            style["maxHeight"] = this.props.maxHeight;
        }

        return (
            <div className="rui-panel-c">
                <div className="rui-panel-header">
                    <div ><span className="rui-panel-title">{this.props.title}</span></div>
                    {this.headerRhsComponent()}
                </div>
                <div style={style} className="rui-panel-body">
                {this.props.children}
                </div>
        </div>)

    }

});

module.exports = Panel;