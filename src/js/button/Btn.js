/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

var React = require("react/addons");
var cn = require("classnames");
var PureRenderMixin = React.addons.PureRenderMixin;

/**
 * Btn element
 *
 * @type {*|Function}
 */
var Btn = React.createClass({
    mixins: [PureRenderMixin],
    propTypes : {
        /** theme */
        scheme : React.PropTypes.string,
        /** text of the  button */
        text : React.PropTypes.string,
        /** if button is in disabled mode */

        /** value of this button */
        value : React.PropTypes.string
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

    __onClickHandler : function(e) {
        if ( this.props.onClick ) {
            this.props.onClick(e,this.props.value);
        }
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

    render: function() {

        var disabled = ( this.props.disabled === true  );
        var scheme = this.props.scheme;
        //var active = this.props.active; // FIXME: this is actually when we are together in a btn group,
        var schemeTheme = null;
        if ( scheme ) {
            schemeTheme = `rui-btn-$scheme`;
        }
        var style = {};
        if ( this.props.width ) {
            style.width = this.props.width;
        }


        var classNames =  cn(
            "rui-btn",
            { schemeTheme : scheme  }
            //{"rui-btn-group-active-violet" : ( this.props.value === active && scheme === "violet" && this.props.value !== undefined ) }
        );
        return (<button ref="btn" onBlur={this.props.onBlur} style={style} value={this.props.value} className={classNames} disabled={disabled} onClick={this.__onClickHandler}>
            { this.createContent() }
        </button>);
    }
});

module.exports = Btn;

