
import React from 'react';


var Column = React.createClass({

    propTypes: {
        visible: React.PropTypes.bool,
        cellAlign: React.PropTypes.string,
        id: React.PropTypes.string.isRequired,
        title: React.PropTypes.string,
        renderer: React.PropTypes.func
    },

    render: function() {
        return null;
    }


});

export {Column};
export default Column;
