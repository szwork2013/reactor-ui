
import React from 'react';



const ActionBar = React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        style: React.PropTypes.object
    },
    render() {
        return <div style={this.props.style}>{this.props.children}</div>;
    }
});


export default ActionBar;
