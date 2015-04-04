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

        

        var btn1 = TestUtils.renderIntoDocument(
            <Btn text="Click Me"></Btn>
        );



    });
});
