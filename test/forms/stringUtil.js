

import chai from 'chai';

import stringUtil from 'reactor-ui/forms/stringUtil';
const expect = chai.expect;



describe("string util" ,function() {
    it('properly creates a label', () => {

        expect(stringUtil.createLabel('')).to.equal('');
        expect(stringUtil.createLabel('alabel')).to.equal('Alabel');
        expect(stringUtil.createLabel('aLabel')).to.equal('A Label');
        expect(stringUtil.createLabel('aLabelAgain')).to.equal('A Label Again');
        expect(stringUtil.createLabel('ALabelAgain')).to.equal(' A Label Again');

    });
});
