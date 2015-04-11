/*globals require,module */
/* jshint -W097,esnext: true */

"use strict";

const React = require("react");
const Nav = require("./Nav");
const IconTextSchemeMixin = require("./IconTextSchemeMixin");
const cn = require("classnames");

const NavGroup = React.createClass({

    mixins: [IconTextSchemeMixin],

    getInitialState() {
        return { collapsed: false };
    },
    buildChildren() {

        if ( this.props.nav ) {
            return this.props.nav.navlist.map( nav => {
                return (<Nav {...nav}/>);
            });
        } else {
            return this.props.children;
        }
    },

    onClick: function() {
         this.setState({collapsed: !this.state.collapsed})
    },

    componentDidMount() {
        //we cant transition 0 height to auto height.. so below is the result
        var cloned = this.refs.cont.getDOMNode().cloneNode(true);
        cloned.style.position = "absolute";
        cloned.style.left = "-9999px";
        cloned.style.height = "auto";
        document.body.appendChild(cloned);
        this.computedHeight = cloned.clientHeight;
        document.body.removeChild(cloned);
    },

    render() {
        var itemsClassnames = cn(
            "rui-snav-items"
        );

        var style = {};
        if ( this.state.collapsed ) {
            style['height'] = this.computedHeight; // this.refs.cont.getDOMNode().offsetHeight + "px"; //'auto';
        } else {
            style['height'] = 0;
        }


        return (
            <div className={"rui-snav-grp-c"} >
                <div onClick={this.onClick} className={"rui-snav-grp"}>{this.createIconTextContent()}</div>
                <div  ref='cont' style={style} className={itemsClassnames}>
                    {this.buildChildren() }
                </div>
            </div>
        )

    }
});

module.exports = NavGroup;