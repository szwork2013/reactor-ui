

import React from 'react';
import Btn from './Btn';
import PureRenderMixin from 'react-addons-pure-render-mixin';


const BtnGroup = React.createClass({
    mixins: [PureRenderMixin],

    propTypes : {
        scheme : React.PropTypes.string,
        active : React.PropTypes.string,
        children: React.PropTypes.node,
        disabled: React.PropTypes.bool,
        onClick: React.PropTypes.function
    },

    getInitialState: function() {
        return {active : this.props.active };
    },

    processBtnGroup() {

        return React.Children.map(this.props.children, ( child ) => {

            if ( child.type !== Btn ) {
                throw new Error('Only Btn type is allowed');
            }
            return React.cloneElement(child,{ style: { marginLeft: 1 } , disabled: this.props.disabled , scheme: this.props.scheme, active: this.state.active,onClick : this.buttonClicked});
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
            <div style={{display: 'inline-block'}}>
                {this.processBtnGroup()}
            </div>
        );
    }

});

export default BtnGroup;
