/*globals require,module,document */
/* jshint -W097, esnext: true */
'use strict';

var React = require("react");
var Pill = require("reactor-ui/Pill");
var Btn = require("reactor-ui/button/Btn");
var BtnGroup = require("reactor-ui/button/BtnGroup");

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


React.render(
        <BtnGroup scheme="violet" active="clock">
            <Btn iconCls="fa fa-clock-o" value="clock"/>
            <Btn iconCls="fa fa-heart" value="heart"/>
            <Btn iconCls="fa fa-adjust" value="adjust"/>
        </BtnGroup>,
document.getElementById("cont4"));
