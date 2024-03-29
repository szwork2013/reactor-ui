

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


import radium from 'radium';
import baseStyle from '../baseStyle';
import btnStyle from './style';

const baseStyleSheet = baseStyle;


const Btn = radium(React.createClass({

    mixins: [PureRenderMixin],

    propTypes:  {
        /** theme */
        scheme : React.PropTypes.string,
        text : React.PropTypes.string,
        /** the value assigned to this button, used by button groups */
        value : React.PropTypes.string,
        /** if active === value then then it will be activated via a css */
        active : React.PropTypes.string,
        disabled: React.PropTypes.bool,
        iconCls: React.PropTypes.string,
        onClick: React.PropTypes.function,
        onBlur: React.PropTypes.function,
        children: React.PropTypes.node,
        style: React.PropTypes.object

    },

    getInitialState() {
        return {hovered: false};
    },

    createText : function() {
        if ( this.props.text ) {
            return this.props.text;
        }
        return null;
    },

    createIcon : function() {
        if ( this.props.iconCls ) {
            return (<span className={this.props.iconCls}></span>);
        }
        return null;
    },

    __onClickHandler(e) {
        if ( this.props.onClick ) {
            this.props.onClick(e,this.props.value);
        }
    },

    onMouseOver() {
        this.setState({hovered:true});
    },
    onMouseOut() {
        this.setState({hovered:false});
    },
    createContent : function() {
        var contentEls = [],
            icon, text;

        if ( React.Children.count(this.props.children) === 0 ) {
            icon = this.createIcon();
            text = this.createText();
            if ( icon ) {
                contentEls.push(icon);
            }
            if ( text ) {
                contentEls.push(text);
            }
            return contentEls;
        } else {
            return this.props.children;
        }
    },

    getUserStyles() {
        const props = this.props;
        return props.styles || {};
    },
    createStyles() {
        const scheme =this.props.scheme || '';
        const userStyles = this.getUserStyles();

        return [btnStyle.Btn,baseStyleSheet[scheme],
                        btnStyle[scheme],
                        this.props.style, this.state.hovered ? btnStyle[scheme+'Hovered'] : {},
                        this.props.disabled ? btnStyle.BtnDisabled :{},
                        (this.props.value === this.props.active && this.props.value !== undefined ) ? btnStyle[scheme+'Active'] : {}
        ].concat(userStyles);

    },
    render: function() {

        const styles = this.createStyles();

        return (<button ref='btn' style={styles}
                    onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}
                    onBlur={this.props.onBlur} value={this.props.value}
                    disabled={this.props.disabled === true} onClick={this.__onClickHandler}>
            { this.createContent() }
        </button>);
    }
}));


export default Btn;
