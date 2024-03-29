


var React = require("react");

var InputMixin = require("./InputMixin");
var LabelMixin = require("./LabelMixin");
var ValueChangeMixin = require("./ValueChangeMixin");


var DatePicker = React.createClass({

    mixins: [InputMixin,LabelMixin,ValueChangeMixin],

    render : function() {
        var value= this.props.model[this.props.name] || "";

        return (
            <div>
                {this.getLabel()}
                <input type="date" ref={this.inputRef} value={value} onChange={this.dispatchInputChange} className="rui-form-input" placeholder={this.props.placeholder} {...this.props}/>
            </div>
        );
    }

});

module.exports = DatePicker;
