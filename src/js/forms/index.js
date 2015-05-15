/* jshint esnext: true */

import React from 'react';
import Input from './Input';
import AutoComplete from './AutoComplete';
import Select from './Select';

var Form = React.createClass({

    childContextTypes: {
        model: React.PropTypes.object.isRequired,
        changeListener : React.PropTypes.any,
        inputRegistry: React.PropTypes.any //so we can introspect coming
    },

    getChildContext: function () {
        return { model: this.props.model, changeListener : this.dispatchChange , inputRegistry: this._inputRegistry };
    },

    /**
     * Register the input
     */
    _inputRegistry(input) {

        

    },
    /**
     * Render a form
     */
    render : function() {

        return (<div>
            {
                React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {  });
                })
            }
        </div>);
    },


    dispatchChange : function(name,value) {

        if ( this.props.changeListener ) {
            this.props.changeListener(name,value);
        }
    }

});


var FormWrapper = React.createClass({

    render() {
        return <Form model={this.props.model} changeListener={this.props.changeListener}>{this.props.children}</Form>;
    }

});

exports.Forms = FormWrapper;
exports.Input = Input;
exports.AutoComplete = AutoComplete;
exports.Select = Select;
