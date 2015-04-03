
var React = require("react");

var Forms = React.createClass({

    render : function() {
        return (<form><div style={ { display: "flex" }}>
            {
                React.Children.map(this.props.children, child => {
                    return React.cloneElement(child,{ model: this.props.model, changeListener : this.dispatchChange })
                })
            }
        </div>
        </form>);
    },

    /**
     * Dispatch any changes on the form
     */
    dispatchChange : function(name,value) {
        if ( this.props.changeListener ) {
            this.props.changeListener(name,value);
        }
    }

});


module.exports = Forms;