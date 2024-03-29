

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
        return { selected : {id: this.props.selected} };
    },

    buildFromSettings() {

        return this.props.navs.map( navkind => {
            //nav kind could have a navlist, which we assume it contains a group of navs link
            if ( navkind.navlist ) {
                return <NavGroup key={navkind.id} selected={this.state.selected} onClick={this.onSubNavClick} nav={navkind}/>;
            } else {
                return (<Nav key={navkind.id} selected={this.state.selected} {...navkind} onClick={this.onClick}/>);
            }
        });

    },
    onSubNavClick(group,child) {
        var selection = {group: group, id: child};
        this.setState({selected: selection});
        this.dispatchSelection(selection);
    },
    onClick(id) {
        var selection = {id: id};
        this.setState({selected: selection});
        this.dispatchSelection(selection);
    },

    dispatchSelection: function(selection) {
        if ( this.props.onSelection ) {
            this.props.onSelection(selection);
        }
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
            <div style={{width: '100%'}}>
                {this.buildChildren()}
            </div>
        );

    }

});

module.exports = SideNav;
