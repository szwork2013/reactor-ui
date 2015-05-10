/* jshint esnext: true */

import React from 'react';


/**
 * A helper on window resize events
 *
 */
var ViewportResizeMixin = {


    componentDidMount() {
        window.addEventListener('resize', this._viewport_handleResize);
    },

    componentWillUnmount() {
        window.removeEventListener('resize', this._viewport_handleResize);
    },

    _viewport_getDimension() {
        return {
            width: window.innerWidth - (this.props.offsetWidth||0),
            height: window.innerHeight - ( this.props.offsetHeight || 0)
        };
    },
    _viewport_handleResize() {
        this.setState(this._viewport_getDimension());
    }



};


module.exports = ViewportResizeMixin;