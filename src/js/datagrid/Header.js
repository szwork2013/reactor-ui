

import React from 'react';
import assign from 'object-assign';

import {baseCellStyle, baseCellContainerStyle} from './styles';
/**
 * This is a grid row.. duh!
 *
 */
var Header = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        width: React.PropTypes.any,
        config: React.PropTypes.object
    },

    render() {
        var width = this.props.width;
        var flex,flexInt;
        if ( width ) {
            flex = '0 0 ' + width;
        } else {
            flexInt = this.props.config.flex ? this.props.config.flex : '1';
            flex = flexInt + ' 1 10px';
        }

        return <div style={ assign(baseCellContainerStyle,{flex: flex}) } >
            <div style={baseCellStyle}><span>{this.props.title}</span></div>
        </div>;
    }

});

export default Header;
