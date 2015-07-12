
'use strict';

import React from 'react';
const PureRenderMixin = React.addons.PureRenderMixin;

const View = React.createClass({

    mixins: [PureRenderMixin],

    propTypes: {
        visible: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        style: React.PropTypes.object
    },
    render() {

        let visible = this.props.visible;
        let name = this.props.name;

        if ( visible === name || visible === undefined ) {
            return <div style={this.props.style|| {}}>{this.props.children}</div>;
        }
        return <div></div>;

    }

});

export default  View;
