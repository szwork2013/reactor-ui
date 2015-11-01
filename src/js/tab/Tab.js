
var React = require("react");

var Tab = React.createClass({

    render : function() {

        return (
            <div className={"rui-tab-c"} style={ { display: this.props.visible ? "block" : "none"} } >
                {this.props.children}
            </div>
        );
    }

});

module.exports = Tab;
