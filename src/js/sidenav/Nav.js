

import React from 'react';
import IconTextSchemeMixin from './IconTextSchemeMixin';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import cn from 'classnames';

const isActive = (props) => {
    return   ( props.selected.id === props.id && props.selected.group === props.group );
};

/**
 * The Single Nav Element
 */
const Nav = React.createClass({

    propTypes: {

        id: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired

    },

    mixins: [IconTextSchemeMixin,PureRenderMixin],

    getInitialState() {
        return { active: isActive(this.props) };
    },


    componentWillReceiveProps(nextProps) {
        this.setState({ active: isActive(nextProps) });
    },



    itemClicked() {

        if ( this.props.onClick ) {
            this.props.onClick(this.props.id);
        }
    },


    render() {
        var classNames = cn(
            "rui-snav-item",
            {"rui-snav-active" : this.state.active }
        );
        return <div onClick={this.itemClicked} className={classNames}>
            {this.createIconTextContent()}
        </div>
    }

});

module.exports = Nav;
