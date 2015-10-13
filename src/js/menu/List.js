

import React from "react";
import ListItem from "./ListItem";

const List =  React.createClass({


    createItems : function() {

        var items = this.props.items || [];

        if ( items.size === 0 ) {
            return this.props.children;
        } else {
            return items.map( item => {

                if ( typeof item === "string" ) {
                    return (<ListItem onClick={this.props.onClick} scheme={this.props.scheme} text={item}/> );
                } else {
                    return (<ListItem onClick={this.props.onClick} scheme={this.props.scheme} text={item.text} value={item.value} icon={item.icon}/> );
                }
            });
        }

    },

    render : function() {
        let style = {};
        if ( this.props.minWidth ) {
            style.minWidth = this.props.minWidth;
        }
        if ( this.props.width ) {
            style.width = this.props.width;
        }

        return ( <div style={style} className="rui-list-c rui-list-float">
            {this.createItems()}
        </div>);

    }

});

module.exports = List;
