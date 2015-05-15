/*globals require,module,document */
/* jshint -W097, esnext: true */
'use strict';

import React from 'react';
import {Datatable, Column} from   'reactor-ui/datagrid';
import Reaction from 'reactor-ui/reaction';
import data from './griddata';

var Route = Reaction.Route;

var Sample = React.createClass({
    render() {
        return <div/>;
    }
});

var routes = (
    <Route path="/">
        <Route path="channels">
            <Route path="/list" view={Sample}/>
            <Route path="/add" view={Sample}/>
            <Route path="/edit/{:id}" view={Sample}/>
        </Route>
        <Route path="reports">
            <Route path="/users" view={Sample}/>
            <Route path="/sales" view={Sample}/>
            <Route path="/etc" view={Sample}/>
        </Route>
    </Route>
);


Reaction.run(routes,
    document.getElementById('cont1'));


React.render(
    <Datatable  data={data}>
        <Column id='shipmentNo' title='Shipment No'/>
        <Column id='productId' title='Product Id'/>
        <Column id='productName' title='Product Name'/>
        <Column id='quantity' title='Quantity'/>
        <Column id='price' title='Price'/>
    </Datatable>,
    document.getElementById('cont1'));
