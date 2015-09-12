

import React from 'react';

import {Forms,Input,Select,AutoComplete} from 'reactor-ui/forms';
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
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Input enable={"$lastname.isValid"} required={true} name="firstname" placeholder="Firstname" />
                        <Input required={true} name="lastname" placeholder="Lastname" />
                        <AutoComplete data={acData} required={true} name="sample" placeholder="Phone Number" />
                    </div>
                    <div className="col-lg-6">
                        <Input  required={true} name="email" placeholder="Email" />
                        <Input required={true} name="phoneNumber" placeholder="Phone Number" />
                        <Select selection={nums} required={true} name="phoneNumber" placeholder="Phone Number" />
                    </div>
                </div>

            </div>
        </Forms>;
    }

});


var FormInline = React.createClass({


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
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Input labelInline={true} enable={"$lastname.isValid"} required={true} name="firstname" placeholder="Firstname" />
                        <Input labelInline={true}  required={true} name="lastname" placeholder="Lastname" />
                        <AutoComplete labelInline={true}   data={acData} required={true} name="sample" placeholder="Phone Number" />
                    </div>
                    <div className="col-lg-6">
                        <Input labelInline={true}  required={true} name="email" placeholder="Email" />
                        <Input labelInline={true}  required={true} name="phoneNumber" placeholder="Phone Number" />
                        <Select labelInline={true}  selection={nums} required={true} name="phoneNumber" placeholder="Phone Number" />
                    </div>
                </div>

            </div>
        </Forms>;
    }

});

var renderForm = function() {
    React.render(
        <Formx model={model} />,
        document.getElementById("cont1"));
};

var renderFormInline = function() {
    React.render(
        <FormInline model={model} />,
        document.getElementById("cont2"));
};

renderForm();
renderFormInline();
// React.render(
//     <Select  inline={true} label="Sample" name="demo" />,
//     document.getElementById("cont3"));
//
// React.render(
//     <AutoComplete searchPath={['id','name']} selectionPath='name' inline={true} data={acData} labelWidth="30%" inputWidth="70%" label="Sample"  name="demo" />,
//     document.getElementById("cont3"));
