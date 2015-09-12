/* jshint -W097 */

'use strict';

import radium from 'radium';
import React from 'react';


import InputMixin from './InputMixin';
import LabelMixin from './LabelMixin';
import ValueChangeMixin from './ValueChangeMixin';
import style from './style';
import defaultProps from './defaultProps';

/** FIXME: wait for .14 and fix context handling */
const Input = radium(React.createClass({
    getDefaultProps() {
        return defaultProps.input;
    },

    propTypes: {
        name : React.PropTypes.string.isRequired,
        labelInline: React.PropTypes.bool,
        labelWidth : React.PropTypes.any,
        inputWidth : React.PropTypes.any,
    },

    mixins: [InputMixin,LabelMixin,ValueChangeMixin],

    contextTypes: {
        model: React.PropTypes.object,
        changeListener : React.PropTypes.any,
        inputRegistry: React.PropTypes.any
    },

    componentDidMount() {

        if ( this.hasContext() && this._getContext().inputRegistry ) {
            this._getContext().inputRegistry(this);
        }
    },

    render : function() {
        const value=  this.getInputValue();
        const params = this.getInputParams();
        const styleArr = [style.inputStyle];

        if ( this.props.labelInline === true ) {
            styleArr.push(style.inputStyleInline);
            styleArr.push({width: this.props.inputWidth});
        } else {
            styleArr.push(style.inputStyleBlock);
        }


        return (
            <div style={[style.containerStyle]}>
                {this.getLabel()}
                <input onKeyDown={this.props.onKeyDown} onKeyUp={this.props.onKeyUp} onKeyPress={this.props.onKeyPress}
                    style={styleArr} value={value} readOnly={params.readOnly} onChange={this.dispatchInputChange} onBlur={this.dispatchInputChange}
                    ref={this.inputRef}  placeholder={this.props.placeholder} {...this.props}/>
            </div>
        );
    }

}));

export default Input;
