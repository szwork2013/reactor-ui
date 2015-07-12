/*globals require,module */
/* jshint -W097, esnext: true */

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

/** we will use pure css for now abstracted by our Container classes */

var Grid = React.createClass({
    displayName: 'Grid',

    render: function render() {
        var className = 'container';
        if (this.props.fluid) {
            className += '-fluid';
        }

        return React.createElement(
            'div',
            _extends({ className: className }, this.props),
            this.props.children
        );
    }

});

module.exports = Grid;