
import React from  'react';
import assign from 'object-assign';

const propTypes = {
    children: React.PropTypes.node,
    style: React.PropTypes.object
};

export const Left = () => {
    return <div style={assign( props.style||{}, {float: 'left'})}>{props.children}</div>;
};


Left.propTypes = propTypes;

export const Right = () => {
    return <div style={assign( props.style||{}, {float: 'left'})}>>{props.children}</div>;
};

Right.propTypes = propTypes;
