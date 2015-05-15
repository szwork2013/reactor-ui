/* global module,require */
/* jshint esnext: true, -W097 */

'use strict';

import React from 'react';
import cx from 'classnames';

import InputMixin from './InputMixin';
import LabelMixin from './LabelMixin';
import ValueChangeMixin from './ValueChangeMixin';



const Input = React.createClass({
    propTypes: {
        name : React.PropTypes.string.isRequired
    },

    mixins: [InputMixin,LabelMixin,ValueChangeMixin],

    contextTypes: {
        model: React.PropTypes.object.isRequired,
        changeListener : React.PropTypes.any,
        inputRegistry: React.PropTypes.any
    },

    componentDidMount() {
        this._getContext().inputRegistry(this);
    },

    render : function() {
        const value= this._getContext().model[this.props.name] || "";
        let readOnly = null;
        if ( !this.props.readOnly ) {//if falsy
            readOnly = "";
        } else {
            readOnly = "readonly";
        }

        return (
            <div className={"rui-form-cont"}>
                {this.getLabel()}
                <input value={value} readOnly={readOnly} onChange={this.dispatchInputChange} ref={this.inputRef} className="rui-form-input" placeholder={this.props.placeholder} {...this.props}/>
            </div>
        );
    }

});

module.exports = Input;
