
import React from 'react';
import style from './style';

import stringUtil from './stringUtil';


const LabelMixin = {



    getLabel() {
        const labelText = stringUtil.createLabel(this.props.label || this.props.name);
        const styles = [style.labelStyle];

        if ( this.props.labelInline === true ) {
            styles.push(style.inputStyleInline);
            styles.push({width: this.props.labelWidth});
        } else {
            styles.push(style.inputStyleBlock);
        }



        if ( this.props.showLabel === false) {
            styles.push({display: "none"});
        }

        return <label style={styles}>{labelText}</label>;

        // var labelText = this.props.label || this.props.name;
        // var labelWidth = this.props.labelWidth || "100%";
        // var labelStyle = { width: labelWidth};
        // var showLabel = true;
        // if ( this.props.showLabel !== undefined ) {
        //     showLabel = this.props.showLabel;
        // }
        //
        // if ( hasLabel ) {
        //     labelText = labelText.substring(0,1).toUpperCase() + labelText.substring(1);
        // }
        // if ( showLabel ) {
        //     return <label style={labelStyle} >{labelText}</label>;
        // }
        // return null;
    }



};

module.exports = LabelMixin;
