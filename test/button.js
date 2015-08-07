
import React from 'react/addons';
import Btn from 'reactor-ui/button/Btn';
import chai from 'chai';
import {colors} from 'reactor-ui/baseStyle';

const expect = chai.expect;
const TestUtils = React.addons.TestUtils;
const Simulate = TestUtils.Simulate;


describe("Button Tests" ,function() {

    it('properly calls onClick Listener', () => {
        var val = "old val";
        var click = function() {
            val = "new val";
        };
        var btn1 = TestUtils.renderIntoDocument(
            <Btn onClick={click} text="Click Me"></Btn>
        );
        Simulate.click(btn1.refs.btn);
        expect(val).to.equal('new val');

    });

    it('properly disables button', () => {

        const btn1 = TestUtils.renderIntoDocument(
            <Btn disabled={true}></Btn>
        );
        const btnEl = btn1.getDOMNode();
        expect(btnEl.disabled).to.equal(true);

        const wrongArgBtn = TestUtils.renderIntoDocument(
            <Btn disabled={"ss"}></Btn>
        );

        const wrongBtnEl = wrongArgBtn.getDOMNode();
        expect(wrongBtnEl.disabled).to.equal(false);

    });

    it('properly handles active and value attribute', () => {

        const btn1 = TestUtils.renderIntoDocument(
            <Btn scheme="green" active="x" value="x"></Btn>
        );

        const btnEl = React.findDOMNode(btn1.refs.btn);
        expect(btnEl.style.backgroundColor).to.equal(colors.green.clone().darken(0.15).rgbString());

        const btn2 = TestUtils.renderIntoDocument(
            <Btn scheme="green" active="x" value="y"></Btn>
        );

        const btnElNotActive = React.findDOMNode(btn2.refs.btn);
        expect(btnElNotActive.style.backgroundColor).to.equal(colors.green.rgbString());

    });

});
