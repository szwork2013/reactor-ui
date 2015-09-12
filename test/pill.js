
import React from 'react/addons';
import Pill from 'reactor-ui/Pill';
import chai from 'chai';
import {colors} from 'reactor-ui/baseStyle';

const expect = chai.expect;
const TestUtils = React.addons.TestUtils;


describe("Pill Tests" ,function() {

    it('properly create pills', () => {

        const pill = TestUtils.renderIntoDocument(
            <Pill scheme="violet"><span className="fa fa-heart"></span> Love</Pill>
        );
        const pillEl = React.findDOMNode(pill);
        expect(pillEl.style.backgroundColor).to.equal(colors.violet.rgbString());
        expect(pillEl.children.length).to.equal(2);
    });


    it('properly create large pills', () => {

        const pill = TestUtils.renderIntoDocument(
            <Pill scheme="violet" size="large"><span className="fa fa-heart"></span> Love</Pill>
        );
        const pillEl = React.findDOMNode(pill);
        expect(pillEl.style.fontSize).to.equal('14px');        
    });

});
