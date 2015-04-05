/*globals require,module,document */
/* jshint -W097, esnext: true */
'use strict';

var React = require("react");
var Pill = require("reactor-ui/Pill");
var Btn = require("reactor-ui/button/Btn");
var BtnGroup = require("reactor-ui/button/BtnGroup");
var BtnDrpDown = require("reactor-ui/button/BtnDrpDown");

React.render(
    <span>
        <Pill ><span className="fa fa-heart"></span> Love</Pill>
        <Pill scheme="green"><span className="fa fa-heart"></span> Love</Pill>
        <Pill scheme="blue"><span className="fa fa-heart"></span> Love</Pill>
        <Pill scheme="violet"><span className="fa fa-heart"></span> Love</Pill>
        <Pill scheme="red"><span className="fa fa-heart"></span> Love</Pill>
        <Pill scheme="orange"><span className="fa fa-heart"></span> Love</Pill>
    </span>,
    document.getElementById("cont1"));


React.render(
    <span>
        <Pill size="lg"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
        <Pill size="lg" scheme="green"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
        <Pill size="lg" scheme="blue"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
        <Pill size="lg" scheme="violet"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
        <Pill size="lg" scheme="red"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
        <Pill size="lg" scheme="orange"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
    </span>,
document.getElementById("cont2"));


React.render(
    <span>
        <Btn text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="green" text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="blue" text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="violet" text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="red" text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="orange" text="Click Me"/><span style={{marginRight: "4px"}}/>
    </span>,
document.getElementById("cont3"));


var BtnGroupDemo = React.createClass({
    shouldComponentUpdate : function() {
        return true;
    },
    getInitialState: function() {
        return {disabled:  this.props.disabled ? true : false };
    },
    onClick : function() {

        this.setState({disabled : !this.state.disabled })
    },

    render: function() {
        return <div>
            <Btn width="120px" text={ this.state.disabled ? "Enable" : "Disable"} onClick={this.onClick} /><span> </span>
            <BtnGroup disabled={this.state.disabled} scheme="violet" active="clock">
                <Btn iconCls="fa fa-clock-o" value="clock"/>
                <Btn iconCls="fa fa-heart" value="heart"/>
                <Btn iconCls="fa fa-adjust" value="adjust"/>
            </BtnGroup>
        </div>
    }

});

React.render(<BtnGroupDemo/>,
document.getElementById("cont4"));

var dropdownList = ["Action 1", "Action 2", "Action 3"];

React.render(<BtnDrpDown defaultText="Select Action" items={dropdownList}/>,
    document.getElementById("cont5"));

React.render(<BtnDrpDown scheme="blue" defaultText="Select Action" items={dropdownList}/>,
    document.getElementById("cont6"));