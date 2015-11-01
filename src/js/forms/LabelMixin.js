
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

    }



};

module.exports = LabelMixin;
