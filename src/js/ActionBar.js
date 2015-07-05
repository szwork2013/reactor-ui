
'use strict';

import React from 'react';

const Action = React.createClass({

    render() {
        return <div style={{display: 'inline-block', padding: "0px 2px"}}>{this.props.children}</div>;
    }
});

const ActionBar = React.createClass({

    render() {
        return <div style={this.props.style}>{this.props.children}</div>;
    }
});

ActionBar.Action = Action;

export default ActionBar;
