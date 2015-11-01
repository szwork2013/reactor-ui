

const React = require("react");

const IconTextSchemeMixin = {


    createIconTextContent() {

        var contentEls = [], propsIcon = this.props.icon,
            propsText = this.props.text,
            icon, text, style = this.props.style; //style= it = icon text, ti , text icon, tbi text below icon

        if ( !style ) {
            style = "it"; //icon, text
        }
        if ( !propsIcon && this.props.nav ) {
            propsIcon = this.props.nav.icon;
        }
        if ( !propsText && this.props.nav ) {
            propsText = this.props.nav.text;
        }

        if ( propsIcon ) {
            icon = (<span style={{paddingRight: 10}} className={propsIcon}></span>);
        }
        if ( propsText ) {
            text = (<span >{propsText}</span>);
        }

        if ( style === "it" ) {
            if ( icon ) {
                contentEls.push(icon);
            }
            if ( text ) {
                contentEls.push(text);
            }
        }

        return contentEls;

    }

};

module.exports = IconTextSchemeMixin;
