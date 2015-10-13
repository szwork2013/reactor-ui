

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


import Nav from './Nav';
const IconTextSchemeMixin = require("./IconTextSchemeMixin");
const cn = require("classnames");


const NavGroup = React.createClass({

    mixins: [IconTextSchemeMixin,PureRenderMixin],


    getInitialState() {

        return { collapsed: false , selected : this.props.selected };
    },

    buildChildren() {

        if ( this.props.nav ) {
            return this.props.nav.navlist.map( nav => {
                return (<Nav selected={this.state.selected} onClick={this.onSubNavClick} {...nav}/>);
            });
        } else {
            return this.props.children;
        }
    },

    componentWillReceiveProps(nextProps) {
        this.setState({selected: nextProps.selected});
    },

    /**
     *  The ID of this would be this.props.id/the clicked nav id
     */
    onSubNavClick : function(id) {
        if ( this.props.onClick ) {
            this.props.onClick(this.props.id,id);
        }
    },

    onClick: function() {
         this.setState({collapsed: !this.state.collapsed});
    },

    componentDidMount() {
        //we cant transition 0 height to auto height.. so below is the result
        if ( !this.__computedHeight ) {
            var cloned = this.refs.cont.getDOMNode().cloneNode(true);
            cloned.style.position = "absolute";
            cloned.style.left = "-9999px";
            cloned.style.height = "auto";
            document.body.appendChild(cloned);
            this.__computedHeight = cloned.clientHeight;
            document.body.removeChild(cloned);
        }

    },

    render() {
        var itemsClassnames = cn(
            "rui-snav-items"
        );

        var style = {};
        if ( this.state.collapsed ) {
            style.height = this.__computedHeight;
        } else {
            style.height = 0;
        }


        return (
            <div className={"rui-snav-grp-c"} >
                <div onClick={this.onClick} className={"rui-snav-grp"}>{this.createIconTextContent()}</div>
                <div  ref='cont' style={style} className={itemsClassnames}>
                    {this.buildChildren() }
                </div>
            </div>
        );

    }
});

module.exports = NavGroup;
