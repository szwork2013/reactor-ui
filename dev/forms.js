/* jshint esnext: true, -W097 */
/* global document */

'use strict';

import React from 'react';

import {Forms,Input,Select} from 'reactor-ui/forms';
import {Grid,Row,Col} from 'reactor-ui/grid';
import assign from 'object-assign';

var model = {firstname: 'Warren'};

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
                    </Col>
                    <Col unit="6">
                        <Input  required={true} name="email" placeholder="Email" />
                        <Input required={true} name="phoneNumber" placeholder="Phone Number" />
                        <Select required={true} name="phoneNumber" placeholder="Phone Number" />
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
