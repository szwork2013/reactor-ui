
import React from 'react';
import radium from 'radium';
import {colors,schemes} from './baseStyle';

const styles = {

    base: {
        color: 'inherit',
        display: 'inline',
        padding: '1px 5px',
        borderRadius: 2,
        border: '1px solid #EEE',
        margin: 2
    },

    large: {
        fontSize: 14,
        padding: '2px 8px'
    }
};

schemes.forEach( scheme => {
    styles[scheme] = {
        color: '#FFF',
        border: '1px solid ' + colors[scheme].clone().darken(0.08).hexString(),
        backgroundColor:  colors[scheme].hexString()
    };
});

const SIZE = {
    large: 'large'
};

const Pill = radium(React.createClass({

    propTypes: {
        size: React.PropTypes.oneOf([SIZE.large]),
    },

    render() {
        const scheme = this.props.scheme;
        const size = this.props.size;

        return (<div style={[styles.base,styles[scheme],size === SIZE.large ? styles.large: {}]}>{this.props.children}</div>);
    }

}));

export default Pill;
