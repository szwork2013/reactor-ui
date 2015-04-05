/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

var React = require("react/addons");
var cn = require("classnames");
var Btn = require("./Btn");
var PureRenderMixin = React.addons.PureRenderMixin;

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
            return React.cloneElement(child,{ disabled: this.props.disabled , scheme: this.props.scheme, active: this.state.active,onClick : this.buttonClicked});
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
