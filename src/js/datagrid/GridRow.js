

import React from 'react';
import cx from 'classnames';


var GridRow = React.createClass({
    propTypes: {
        header: React.PropTypes.bool,
        children: React.PropTypes.node
    },
    render() {
        var clsName = cx(
            { 'rui-dt-colcont' : this.props.header === true} ,
            { 'rui-dt-rowcont' : !this.props.header }
        );
        return <div className={clsName}>
            {this.props.children }
        </div>;
    }

});

export default GridRow;
