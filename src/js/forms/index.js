/* jshint esnext: true */

import React from 'react';

//TODO: we need to recurvsively parse the children and get their props
//the problem is if its nested from any of the container or layout components
var Forms = React.createClass({

    /**
     * Render a form
     */
    render : function() {
        return (<form><div style={ { display: "flex" }}>
            {
                React.Children.map(this.props.children, child => {
                    return React.cloneElement(child,{ model: this.props.model, changeListener : this.dispatchChange });
                })
            }
        </div>
        </form>);
    },


    dispatchChange : function(name,value) {
        if ( this.props.changeListener ) {
            this.props.changeListener(name,value);
        }
    }

});


module.exports = Forms;
