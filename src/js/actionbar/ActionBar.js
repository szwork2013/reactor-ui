
import React from 'react';

// const ActionBar = React.createClass({
//
//     render() {
//         return <div style={this.props.style}>{this.props.children}</div>;
//     }
// });

const ActionBar = (props) => {

    return <div style={props.style}>{props.children}</div>;

};

export default ActionBar;
