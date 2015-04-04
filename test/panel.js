
var assert = require("assert");
var Panel = require("reactor-ui/panel");
var React = require("react/addons");

var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;

var expect = require("chai").expect;

describe("Panel Tests" ,function() {
    it('Basic Tests', function(){

        var panel1 = TestUtils.renderIntoDocument(
            <Panel collapsable={true}>

            </Panel>
        );
        var panelBody = TestUtils.findRenderedDOMComponentWithClass(panel1,"rui-panel-body");
        var panelDom = panelBody.getDOMNode();


        var collapseToggle = React.findDOMNode(panel1.refs.collapseToggle);
        expect(collapseToggle.tagName).to.equal("SPAN");

        expect(panelDom.style['display']).to.equal('');
        Simulate.click(collapseToggle);
        expect(panelDom.style['display']).to.equal('none');
        Simulate.click(collapseToggle);
        expect(panelDom.style['display']).to.equal('');

    });
});