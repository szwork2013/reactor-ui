
import React from 'react/addons';
import chai from 'chai';
import Input from 'reactor-ui/forms/Input';

const expect = chai.expect;
const TestUtils = React.addons.TestUtils;
// const Simulate = TestUtils.Simulate;


describe("Input Test" ,function() {

    it('test default props', () => {
        const input1 = TestUtils.renderIntoDocument(
            <Input/>
        );
        const props = input1.props;
        expect(props.labelInline).to.equal(false);
        expect(props.showLabel).to.equal(true);
        expect(props.labelWidth).to.equal("20%");
        expect(props.inputWidth).to.equal("80%");

    });

    //
    // it('properly works in standalone mode', () => {
    //     var input1 = TestUtils.renderIntoDocument(
    //         <Input/>
    //     );
    //     // console.log(input1);
    // });

});
