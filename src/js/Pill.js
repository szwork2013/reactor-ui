/* jshint -W097*/
'use strict';

import React from 'react';
import cn from 'classnames';

const Pill = React.createClass({

    render() {
        var scheme = this.props.scheme;
        var size = this.props.size;
        var classNames =  cn(
            "rui-pill",
            {"rui-pill-green" : (scheme === "green") },
            {"rui-pill-blue" : (scheme === "blue") },
            {"rui-pill-violet" : (scheme === "violet") },
            {"rui-pill-red" : (scheme === "red") },
            {"rui-pill-orange" : (scheme === "orange") },
            {"rui-pill-large" : (size === "lg")}

        );
        return (<div className={classNames}>{this.props.children}</div>);
    }

});

export default Pill;
