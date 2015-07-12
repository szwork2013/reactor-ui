
'use strict';

import React from 'react';



const ActionBar = React.createClass({

    render() {
        return <div style={this.props.style}>{this.props.children}</div>;
    }
});


export default ActionBar;
