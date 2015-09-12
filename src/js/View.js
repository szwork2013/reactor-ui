import React from 'react';
const PureRenderMixin = React.addons.PureRenderMixin;

/**
 * A simple view container
 */
const View = React.createClass({

    mixins: [PureRenderMixin],

    propTypes: {
        /** the visible view */
        visible: React.PropTypes.string,
        /** the name of this view */
        name: React.PropTypes.string.isRequired,
        /** style this view */
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
