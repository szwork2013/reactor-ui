/*globals require,describe,it */
/* jshint -W097, esnext: true */
'use strict';

var assert = require("assert");
var React = require("react/addons");

var Btn = require("reactor-ui/button/Btn");

var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;

var expect = require("chai").expect;

describe("Button Tests" ,function() {

    it('Single Button Test', function(){

        var val = "old val";
        var click = function() {
            val = "new val";
        };
        var btn1 = TestUtils.renderIntoDocument(
            <Btn onClick={click} text="Click Me"></Btn>
        );
        Simulate.click(btn1.refs.btn);
        expect(val).to.equal('new val');

        //disabled
        btn1 = TestUtils.renderIntoDocument(
            <Btn disabled={true} onClick={click} text="Click Me"></Btn>
        );

        var btnNode = TestUtils.findRenderedDOMComponentWithTag(btn1,"button");

        expect(btnNode.getDOMNode().getAttribute("disabled")).to.equal('');

        //enabled
        btn1 = TestUtils.renderIntoDocument(
            <Btn disabled={false} onClick={click} text="Click Me"></Btn>
        );
        btnNode = TestUtils.findRenderedDOMComponentWithTag(btn1,"button");
        expect(btnNode.getDOMNode().getAttribute("disabled")).to.equal(null);


    });
});
