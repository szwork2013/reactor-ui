import React from 'react';

const Action = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },
    render() {
        return <div style={{display: 'inline-block', padding: '0px 2px'}}>{this.props.children}</div>;
    }
});

export default Action;
