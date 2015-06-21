
'use strict';


import React from 'react/addons';
import Btn from './Btn';

const PureRenderMixin = React.addons.PureRenderMixin;

var BtnGroup = React.createClass({
    mixins: [PureRenderMixin],
    propTypes : {
        /** theme */
        scheme : React.PropTypes.string,
        /** text of the  button */
        active : React.PropTypes.string
        /** if this button group is disabled */

    },

    getInitialState: function() {
        return {active : this.props.active };
    },

    processBtnGroup() {

        return React.Children.map(this.props.children, ( child ) => {

            if ( child.type !== Btn ) {
                throw new Error("Only Btn type is allowed");
            }
            return React.cloneElement(child,{ style: { marginLeft: 2} , disabled: this.props.disabled , scheme: this.props.scheme, active: this.state.active,onClick : this.buttonClicked});
        });

    },

    buttonClicked : function(event,value) {
        if ( this.props.onClick ) {
           this.props.onClick(value);
        }
        this.setState({active : value});
    },

    render() {
        return (
            <div className="rui-btn-group">
                {this.processBtnGroup()}
            </div>
        );
    }

});

module.exports = BtnGroup;
