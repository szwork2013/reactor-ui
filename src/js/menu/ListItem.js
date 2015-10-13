

import React from "react";
import cn from "classnames";


const ListItem =  React.createClass({

    dispatchOnclick : function() {
        if ( this.props.onClick) {
            this.props.onClick(this.props.value);
        }
    },


    render : function() {

        var scheme = this.props.scheme;

        var classNames =  cn(
            "rui-li",
            {"rui-li-green" : (scheme === "green") },
            {"rui-li-blue" : (scheme === "blue") },
            {"rui-li-violet" : (scheme === "violet") },
            {"rui-li-red" : (scheme === "red") },
            {"rui-li-orange" : (scheme === "orange") }
        );

        return (<div onClick={this.dispatchOnclick} className={classNames} value={this.props.value}>
            {this.props.text}
        </div>);

    }

});

export default ListItem;
