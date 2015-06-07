/*globals require,module,document */
/* jshint -W097, esnext: true */
'use strict';

import React from 'react';
import {Datatable, Column} from   'reactor-ui/datagrid';
import Pill from 'reactor-ui/Pill';

import reaction from 'reactor-ui/reaction';
import data from './griddata';



/*
var routes = (
    <Route path="/">
        <Route path="channels">
            <Route path="/list" render={Sample}/>
            <Route path="/add" render={Sample}/>
            <Route path="/edit/{:id}" render={Sample}/>
        </Route>
        <Route path="reports">
            <Route path="/users" render={Sample}/>
            <Route path="/sales" render={Sample}/>
            <Route path="/etc" render={Sample}/>
        </Route>
    </Route>
);


Reaction.run(routes,
    document.getElementById('cont1'));

*/

    /*

var idRenderer = function(recdata) {
    return <Pill scheme="blue">{recdata.formattedValue}</Pill>; //<span style={{color: 'red', fontWeight: 'bold'}}>{recdata.formattedValue}</span>;
};

React.render(
    <Datatable  data={data}>
        <Column cellAlign={"center"} id='shipmentNo' title='Shipment No' renderer={idRenderer}/>
        <Column id='productId' title='Product Id'/>
        <Column id='productName' title='Product Name'/>
        <Column id='quantity' title='Quantity'/>
        <Column id='price' title='Price'/>
    </Datatable>,
    document.getElementById('cont1'));
    */
