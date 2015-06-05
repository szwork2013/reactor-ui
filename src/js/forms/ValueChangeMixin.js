/* global module,require */
/* jshint esnext:true, -W097, maxstatements:15, maxdepth:2, maxcomplexity:5 */

'use strict';

import React from 'react';

var ValueChangeMixin = {


    dispatchInputChange : function() {

        this._getContext().changeListener();
        if ( this._getContext().changeListener ) {
            var elNode = this.__input.getDOMNode();
            this._getContext().changeListener(this.props.name,elNode.value);
        }
    }

};

module.exports = ValueChangeMixin;
