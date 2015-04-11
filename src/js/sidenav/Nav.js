
"use strict";

const React = require("react");
const IconTextSchemeMixin = require("./IconTextSchemeMixin");
const PureRenderMixin = require('react/addons').addons.PureRenderMixin;
const cn = require("classnames");

const Nav = React.createClass({

    propTypes: {

        id: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired

    },

    mixins: [IconTextSchemeMixin,PureRenderMixin],

    getInitialState() {
        return { active: this.props.selected === this.props.id };
    },
    componentWillReceiveProps(nextProps) {
        this.setState({active: nextProps.selected === this.props.id});
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