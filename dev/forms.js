/* jshint esnext: true, -W097 */
/* global document */

'use strict';

import React from 'react';

import {Forms,Input,Select,AutoComplete} from 'reactor-ui/forms';
import {Grid,Row,Col} from 'reactor-ui/grid';
import assign from 'object-assign';

var model = {firstname: 'Warren'};
var nums = [{value: 1, text: 'One'}];

var acData = [
    {id:'123', name: 'Abc'},
    {id:'456',name: 'Def 123'},
    {id:'789',name: 'Another K'},
    {id:'D',name: 'Xyz Elephant'},
    {id:'E',name: 'Dog and Cat'}
];

/**
 *
 */
var Formx = React.createClass({


    getInitialState() {
        return { model : this.props.model };
    },

    formChanged : function(key,value) {
        var added = {};
        added[key] = value;
        this.setState({model: assign({},this.state.model,added)});
    },

    render() {
        return <Forms changeListener={this.formChanged} model={this.state.model} displayType="block">
            <Grid>
                <Row>
                    <Col unit="6">
                        <Input enable={"$lastname.isValid"} required={true} name="firstname" placeholder="Firstname" />
                        <Input required={true} name="lastname" placeholder="Lastname" />
                        <AutoComplete data={acData} required={true} name="sample" placeholder="Phone Number" />
                    </Col>
                    <Col unit="6">
                        <Input  required={true} name="email" placeholder="Email" />
                        <Input required={true} name="phoneNumber" placeholder="Phone Number" />
                        <Select selection={nums} required={true} name="phoneNumber" placeholder="Phone Number" />
                    </Col>
                </Row>

            </Grid>
        </Forms>;
    }

});


var renderForm = function() {
    React.render(
        <Formx model={model} />,
        document.getElementById("cont1"));
};

renderForm();
React.render(
    <Select labelWidth="30%" labelInline={true} label="Sample" name="demo" />,
    document.getElementById("cont2"));

React.render(
    <AutoComplete searchPath={['id','name']} selectionPath='name' labelInline={true}  data={acData} labelWidth="30%" inputWidth="70%" label="Sample" labelType="inline" name="demo" />,
    document.getElementById("cont3"));
