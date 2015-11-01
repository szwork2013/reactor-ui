
import React from 'react';
import cx from 'classnames';

const Action = React.createClass({

    onClick() {
        if ( this.props.onClick ) {
            this.props.onClick(this.props.name);
        }
    },

    render() {
        const classNames = cx(
            'rui-portlet-tab-act',
            {'rui-portlet-tab-act-active': this.props.active === this.props.name}
        );

        return <div className={classNames} onClick={this.onClick}>
            {this.props.text}
        </div>;

    }
});

const TabActionBar = React.createClass({

    getInitialState() {
        return { active: this.props.active };
    },

    onClick(name) {
        this.setState({active: name});
        if ( this.props.onTabActivated ) {
            this.props.onTabActivated(name);
        }
    },


    render() {
        return <div style={this.props.style}>{
            React.Children.map(this.props.children, child => {
                if ( child == null ) {
                    return null;
                }
                return React.cloneElement(child,{onClick: this.onClick, active: this.state.active});
            })
        }</div>;
    }
});

TabActionBar.Action = Action;

export default TabActionBar;
