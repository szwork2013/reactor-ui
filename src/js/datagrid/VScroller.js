

import React from 'react';

/**
 * Listen to mouse drag , mousewheel andkeyboard arrowkeys
 *
 */
const VScroller = React.createClass({

    _onWheel(e) {

    },

    scrolling() {

    },

    render() {
        return <div onWheel={this._onWheel} style={ { height: this.props.height , width: 16, backgroundColor : "#EEE" }}  className={"rui-dg-vscroller"}>
            <div  style={ { borderRadius: 2, margin: 3, backgroundColor : "#959595", width: 10, height: 30}}></div>
        </div>;
    }

});

export default VScroller;
