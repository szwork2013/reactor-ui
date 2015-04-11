/*globals require,module */
/* jshint -W097,esnext: true */

"use strict";

var React = require("react");

var NavGroup = require("./NavGroup");
var Nav = require("./Nav");

/**
 * The SideNav is a Side Navigation component duH!
 *
 * navs = [
 *     { title: "Main Group" , navlist: [
 *          { title: "Nav 1" }
 *       ]
 *     }
 * ]
 * @type {*|Function}
 */
var SideNav = React.createClass({



    getInitialState() {
        return { selected : this.props.selected };
    },

    buildFromSettings() {

        return this.props.navs.map( navkind => {
            //nav kind could have a navlist, which we assume it contains a group of navs link
            if ( navkind.navlist ) {
                return <NavGroup nav={navkind}/>;
            } else {
                return (<Nav selected={this.state.selected} {...navkind} onClick={this.onClick}/>);
            }
        });

    },

    onClick(id) {
        this.setState({selected: id});
    },

    buildChildren() {

        if ( this.props.navs ) {
            return this.buildFromSettings();
        } else {
            return this.props.children;
        }
    },

    render() {
        return (
            <div>
                {this.buildChildren()}
            </div>
        );

    }

});

module.exports = SideNav;
