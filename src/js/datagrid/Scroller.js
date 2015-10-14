

import React from 'react';

const Scroller = React.createClass({

    render() {
        return <div style={{position: 'relative'}}>
            {this.props.children}
        </div>;

    }
});

export default Scroller;
