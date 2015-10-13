
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import cn from 'classnames';
import Btn from './Btn';
import List from '../menu/List';



const BtnDropDown = React.createClass({
    mixins: [PureRenderMixin],

    getInitialState : function() {
        return { listVisible : false };
    },

    createItems : function() {
        if ( this.state.listVisible ) {
            if (this.props.items) {
                return <List onClick={this.onItemClick}  {...this.props} minWidth={this.state.listMinWidth}/>;
            } else {
                //FIXME, we should listener here
                return this.props.children;
            }
        } else {
            return null;
        }
    },

    onItemLick : function() {
        if ( this.props.onClick ) {
            this.props.onClick.apply(null,arguments);
        }
    },

    onBlur : function() {
       this.setState({listVisible: !this.state.listVisible});
    },
    buttonClicked : function() {
        var element = this.refs.btn.getDOMNode();
        var width = element.offsetWidth;
        this.setState({listVisible: !this.state.listVisible,listMinWidth: width +"px"});
    },

    render: function() {
        var defaultText = this.props.defaultText;

        var classNames = cn(
            "rui-btn-drpdown",
            {"rui-btn-drpdown-green" : "green" === this.props.scheme}
        );


        return (
            <div  className={classNames}>
                <Btn scheme={this.props.scheme} ref="btn" onBlur={this.onBlur} disabled={this.props.disabled} onClick={this.buttonClicked}>
                {defaultText} <span className="fa fa-chevron-down"></span>
                </Btn>
                {this.createItems()}
            </div>
        );

    }
});

module.exports = BtnDropDown;
