/* jshint esnext: true, -W097 */
/* global module */

'use strict';

import React from 'react';

var LabelMixin = {



    getLabel() {
        var hasLabel = this.props.label ? true : false;
        var labelText = this.props.label || this.props.name;
        var labelWidth = this.props.labelWidth || "100%";
        var labelStyle = { width: labelWidth};
        var showLabel = true;
        if ( this.props.showLabel !== undefined ) {
            showLabel = this.props.showLabel;
        }

        if ( hasLabel ) {
            labelText = labelText.substring(0,1).toUpperCase() + labelText.substring(1);
        }
        if ( showLabel ) {
            return <label style={labelStyle} >{labelText}</label>;
        }
        return undefined;

    }



};

module.exports = LabelMixin;
