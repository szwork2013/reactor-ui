
import React from 'react/addons';
import {Btn,BtnGroup} from 'reactor-ui/button/';
import chai from 'chai';

const expect = chai.expect;
const TestUtils = React.addons.TestUtils;
const Simulate = TestUtils.Simulate;

describe("Button Group Tests" ,function() {

    it('properly activates 1 button from group', () => {

        var btn1 = TestUtils.renderIntoDocument(
            <BtnGroup disabled={false} scheme="red" active="clock">
                <Btn iconCls="fa fa-clock-o" value="clock"/>
                <Btn iconCls="fa fa-heart" value="heart"/>
                <Btn iconCls="fa fa-adjust" value="adjust"/>
            </BtnGroup>
        );
        
    });

});
